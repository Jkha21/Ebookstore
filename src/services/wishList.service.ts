import Book from "../models/book.model";
import WishList from "../models/wishlist.model";


class WishListService {

    public AddItem = async (id: string, bookId: string): Promise<any> =>{
        const user = await WishList.findOne({userId: id});
        if(user){
            const data = user.books.find(book => bookId === book.bookId);
            if(data){
                return user;
            }else{
                const book = await Book.findOne({_id: bookId});
                const {discountPrice, bookName, bookImage, author, price} = book;
                user.books.push({bookId, discountPrice, bookName, bookImage, author, price});
                user.save();
                return user
            }
        }else{
            const user = await WishList.create({userId: id});
            const book = await Book.findOne({_id: bookId});
            const {discountPrice, bookName, bookImage, author, price} = book;
            user.books.push({bookId, discountPrice, bookName, bookImage, author, price});
            user.save();
            return user;
    };
    };

    public RemoveItem = async (id: string, bookId: string): Promise<any> =>{
        const user = await WishList.findOne({userId: id});
        user.books.filter(book => bookId !== book.bookId);
        user.save();
        return user;
    };

}

export default WishListService;