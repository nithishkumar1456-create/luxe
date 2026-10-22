/**
 * Connect Fashions, Quality & Production Routes (FN-CON-001 to 006, FN-QC-001, FN-PRD-001)
 */

import { Router } from 'express';
import { connectController } from '../controllers/connect.controller.js';
import { qualityController, productionController } from '../controllers/quality.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
import { authorize } from '../middlewares/authorize.js';
import { validate } from '../middlewares/validate.js';
import { linkPieceSchema } from '../validators/connect.validator.js';
import { createInspectionSchema } from '../validators/quality.validator.js';
import { ROLES } from '../config/constants.js';

export const connectRouter = Router();
connectRouter.use(authenticate);

// FN-CON-001: Link piece
connectRouter.put(
  '/:id',
  authorize([ROLES.DESIGNER, ROLES.PRODUCTION_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(linkPieceSchema),
  connectController.linkPiece
);

// FN-CON-002: Publish piece to website
connectRouter.post(
  '/:id/publish-ecommerce',
  authorize([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  connectController.publish
);

// FN-CON-004: Trace SKU backwards
connectRouter.get(
  '/by-product/:productId',
  authorize([
    ROLES.ADMIN,
    ROLES.DESIGNER,
    ROLES.PRODUCTION_MANAGER,
    ROLES.QC_MANAGER,
    ROLES.INVENTORY_MANAGER,
    ROLES.EVENT_MANAGER,
    ROLES.SUPER_ADMIN
  ]),
  connectController.traceSku
);

export const qualityRouter = Router();
qualityRouter.use(authenticate);

// FN-QC-001: Record inspection
qualityRouter.post(
  '/inspections',
  authorize([ROLES.QC_MANAGER, ROLES.SUPER_ADMIN]),
  validate(createInspectionSchema),
  qualityController.recordInspection
);

export const productionRouter = Router();
productionRouter.use(authenticate);

// FN-PRD-001: Update production status
productionRouter.put(
  '/orders/:id/status',
  authorize([ROLES.PRODUCTION_MANAGER, ROLES.SUPER_ADMIN]),
  productionController.updateStatus
);
