import express, { IRouter, Router } from 'express';
const router = express.Router();

import userRoute from './user.route';
import CartRoute from './cart.route';
import BookRoute from './book.route';
import WishListRoute from './wishList.route';
import CustomerRoute from './customer.route';
import OrderRoute from './order.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', new userRoute().getRoutes());
  router.use('/cart', new CartRoute().getRoutes());
  router.use('/book', new BookRoute().getRoutes());
  router.use('/wishlist', new WishListRoute().getRoutes());
  router.use('/customer', new CustomerRoute().getRoutes());
  router.use('/order', new OrderRoute().getRoutes());

  return router;
};

export default routes;
