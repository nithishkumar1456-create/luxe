/**
 * Connect Fashions Controller (FN-CON-001 to FN-CON-005)
 */

import { connectService } from '../services/connect.service.js';
import { successResponse } from '../utils/envelope.js';

export const connectController = {
  async linkPiece(req, res, next) {
    try {
      const link = await connectService.linkPiece(req.body, req.user.id);
      return successResponse(res, 200, 'Fashion link saved', link);
    } catch (err) {
      next(err);
    }
  },

  async publish(req, res, next) {
    try {
      const published = await connectService.publishPiece(req.params.id, req.user.id);
      return successResponse(res, 200, 'Piece published to ecommerce', published);
    } catch (err) {
      next(err);
    }
  },

  async traceSku(req, res, next) {
    try {
      const trace = await connectService.traceSku(req.params.productId);
      return successResponse(res, 200, 'Provenance trace', trace);
    } catch (err) {
      next(err);
    }
  },

  async attachLook(req, res, next) {
    try {
      const look = await connectService.attachLookToEvent(
        req.params.id,
        req.body.fashionLinkId,
        req.body.runwayOrder
      );
      return successResponse(res, 201, 'Look attached to event', look);
    } catch (err) {
      next(err);
    }
  }
};
