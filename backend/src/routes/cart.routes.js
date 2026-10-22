/**
 * Cart & Wishlist Routes (FN-ECOM-005, FN-ECOM-006)
 */

import { Router } from 'express';
import { cartController, wishlistController } from '../controllers/cart.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validate } from '../middlewares/validate.js';
import { addCartItemSchema, updateCartItemSchema } from '../validators/cart.validator.js';

export const cartRouter = Router();
cartRouter.use(authenticate);

cartRouter.get('/', cartController.getCart);
cartRouter.post('/items', validate(addCartItemSchema), cartController.addItem);
cartRouter.put('/items/:id', validate(updateCartItemSchema), cartController.updateItemQuantity);
cartRouter.delete('/items/:id', cartController.removeItem);

export const wishlistRouter = Router();
wishlistRouter.use(authenticate);

wishlistRouter.get('/', wishlistController.getWishlist);
wishlistRouter.post('/items', wishlistController.addItem);
wishlistRouter.delete('/items/:id', wishlistController.removeItem);
