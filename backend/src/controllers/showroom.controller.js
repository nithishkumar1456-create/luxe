/**
 * Showroom & Inventory Controllers (API-011, API-012, FN-STORE-001 to 006)
 */

import { showroomService } from '../services/showroom.service.js';
import { inventoryService } from '../services/inventory.service.js';
import { successResponse } from '../utils/envelope.js';

export const showroomController = {
  async register(req, res, next) {
    try {
      const showroom = await showroomService.registerShowroom(req.body, req.user.id);
      return successResponse(res, 201, 'Showroom registered', showroom);
    } catch (err) {
      next(err);
    }
  },

  async bookVisit(req, res, next) {
    try {
      const visit = await showroomService.bookVisit(req.body, req.user.id);
      return successResponse(res, 201, 'Visit scheduled', visit);
    } catch (err) {
      next(err);
    }
  },

  async inStoreOrder(req, res, next) {
    try {
      const order = await showroomService.createInStoreOrder(req.body, req.user.id);
      return successResponse(res, 201, 'Showroom sale completed', order);
    } catch (err) {
      next(err);
    }
  },

  async handoverOrder(req, res, next) {
    try {
      const order = await showroomService.handoverOnlineOrder(req.params.id, req.body.showroomId, req.user.id);
      return successResponse(res, 200, 'Order handed over', order);
    } catch (err) {
      next(err);
    }
  },

  async getDayList(req, res, next) {
    try {
      const result = await showroomService.getShowroomDayList(req.params.id, req.query.date);
      return successResponse(res, 200, 'Showroom day list', result);
    } catch (err) {
      next(err);
    }
  }
};

export const inventoryController = {
  async getBalances(req, res, next) {
    try {
      const balances = await inventoryService.getBalances(req.query.locationId);
      return successResponse(res, 200, 'Inventory balances', balances);
    } catch (err) {
      next(err);
    }
  },

  async recordTransaction(req, res, next) {
    try {
      const tx = await inventoryService.recordTransaction(req.body, req.user.id);
      return successResponse(res, 201, 'Stock transaction recorded', tx);
    } catch (err) {
      next(err);
    }
  },

  async transfer(req, res, next) {
    try {
      const transfer = await inventoryService.transferStock(req.body, req.user.id);
      return successResponse(res, 200, 'Stock transferred', transfer);
    } catch (err) {
      next(err);
    }
  }
};
