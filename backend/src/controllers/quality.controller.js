/**
 * Quality & Production Controllers (FN-QC-001, FN-PRD-001)
 */

import { qualityService, productionService } from '../services/quality.service.js';
import { successResponse } from '../utils/envelope.js';

export const qualityController = {
  async recordInspection(req, res, next) {
    try {
      const inspection = await qualityService.recordInspection(req.body, req.user.id);
      return successResponse(res, 201, 'Inspection recorded', inspection);
    } catch (err) {
      next(err);
    }
  }
};

export const productionController = {
  async updateStatus(req, res, next) {
    try {
      const updated = await productionService.updateProductionStatus(
        req.params.id,
        req.body.status,
        req.user.id
      );
      return successResponse(res, 200, 'Production status updated', updated);
    } catch (err) {
      next(err);
    }
  }
};
