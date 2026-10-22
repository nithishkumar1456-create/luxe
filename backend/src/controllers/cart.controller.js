/**
 * Cart & Wishlist Controllers
 */

import { cartService, wishlistService } from '../services/cart.service.js';
import { successResponse } from '../utils/envelope.js';

export const cartController = {
  async getCart(req, res, next) {
    try {
      const cart = await cartService.getCart(req.user.id);
      return successResponse(res, 200, 'Cart retrieved', cart);
    } catch (err) {
      next(err);
    }
  },

  async addItem(req, res, next) {
    try {
      const item = await cartService.addItem(req.user.id, req.body);
      return successResponse(res, 201, 'Item added to cart', item);
    } catch (err) {
      next(err);
    }
  },

  async updateItemQuantity(req, res, next) {
    try {
      const item = await cartService.updateItemQuantity(req.user.id, req.params.id, req.body.quantity);
      return successResponse(res, 200, 'Cart item updated', item);
    } catch (err) {
      next(err);
    }
  },

  async removeItem(req, res, next) {
    try {
      await cartService.removeItem(req.user.id, req.params.id);
      return successResponse(res, 200, 'Cart item removed', null);
    } catch (err) {
      next(err);
    }
  }
};

export const wishlistController = {
  async getWishlist(req, res, next) {
    try {
      const wishlist = await wishlistService.getWishlist(req.user.id);
      return successResponse(res, 200, 'Wishlist items', wishlist);
    } catch (err) {
      next(err);
    }
  },

  async addItem(req, res, next) {
    try {
      const item = await wishlistService.addItem(req.user.id, req.body.productId);
      return successResponse(res, 201, 'Added to wishlist', item);
    } catch (err) {
      next(err);
    }
  },

  async removeItem(req, res, next) {
    try {
      await wishlistService.removeItem(req.user.id, req.params.id);
      return successResponse(res, 200, 'Removed from wishlist', null);
    } catch (err) {
      next(err);
    }
  }
};
