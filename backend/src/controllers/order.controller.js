/**
 * Order Controller (API-007 to API-010)
 */

import { orderService } from '../services/order.service.js';
import { successResponse } from '../utils/envelope.js';

export const orderController = {
  async checkout(req, res, next) {
    try {
      const summary = await orderService.startCheckout(req.user.id, req.body);
      return successResponse(res, 200, 'Checkout initiated', summary);
    } catch (err) {
      next(err);
    }
  },

  async createOrder(req, res, next) {
    try {
      const { checkoutReference, providerPayload } = req.body;
      const order = await orderService.confirmPaymentAndCreateOrder(
        req.user.id,
        checkoutReference,
        providerPayload
      );
      return successResponse(res, 201, 'Order confirmed', order);
    } catch (err) {
      next(err);
    }
  },

  async getOrders(req, res, next) {
    try {
      const orders = await orderService.getCustomerOrders(req.user.id);
      return successResponse(res, 200, 'Orders retrieved', orders);
    } catch (err) {
      next(err);
    }
  },

  async getOrderById(req, res, next) {
    try {
      const order = await orderService.getOrderById(req.params.id, req.user);
      return successResponse(res, 200, 'Order details', order);
    } catch (err) {
      next(err);
    }
  },

  async updateStatus(req, res, next) {
    try {
      const updated = await orderService.updateOrderStatus(req.params.id, req.body.status, req.user);
      return successResponse(res, 200, 'Order status updated', updated);
    } catch (err) {
      next(err);
    }
  }
};
