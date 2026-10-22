/**
 * Catalogue Controller (API-002 to API-006)
 */

import { catalogueService } from '../services/catalogue.service.js';
import { successResponse } from '../utils/envelope.js';

export const catalogueController = {
  async getProducts(req, res, next) {
    try {
      const isStaff = Boolean(req.user && req.user.roles?.some(r => ['ADMIN', 'SUPER_ADMIN'].includes(r)));
      const result = await catalogueService.getProducts({ ...req.query, isStaff });
      return successResponse(res, 200, 'Products retrieved', result);
    } catch (err) {
      next(err);
    }
  },

  async getProductById(req, res, next) {
    try {
      const isStaff = Boolean(req.user && req.user.roles?.some(r => ['ADMIN', 'SUPER_ADMIN'].includes(r)));
      const product = await catalogueService.getProductById(req.params.id, isStaff);
      return successResponse(res, 200, 'Product details', product);
    } catch (err) {
      next(err);
    }
  },

  async createProduct(req, res, next) {
    try {
      const product = await catalogueService.createProduct(req.body, req.user.id);
      return successResponse(res, 201, 'Product created', product);
    } catch (err) {
      next(err);
    }
  },

  async updateProduct(req, res, next) {
    try {
      const product = await catalogueService.updateProduct(req.params.id, req.body, req.user.id);
      return successResponse(res, 200, 'Product updated', product);
    } catch (err) {
      next(err);
    }
  },

  async deactivateProduct(req, res, next) {
    try {
      await catalogueService.deactivateProduct(req.params.id, req.user.id);
      return successResponse(res, 200, 'Product deactivated', null);
    } catch (err) {
      next(err);
    }
  }
};
