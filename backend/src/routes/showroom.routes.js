/**
 * Inventory & Showroom Routes (API-011, API-012, FN-STORE-001 to 006)
 */

import { Router } from 'express';
import { inventoryController, showroomController } from '../controllers/showroom.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
import { authorize } from '../middlewares/authorize.js';
import { validate } from '../middlewares/validate.js';
import {
  stockTransactionSchema,
  stockTransferSchema
} from '../validators/inventory.validator.js';
import {
  registerShowroomSchema,
  bookVisitSchema,
  inStoreOrderSchema
} from '../validators/showroom.validator.js';
import { ROLES } from '../config/constants.js';

export const inventoryRouter = Router();
inventoryRouter.use(authenticate);

// API-011: GET /api/inventory
inventoryRouter.get(
  '/',
  authorize([ROLES.INVENTORY_MANAGER, ROLES.WAREHOUSE_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  inventoryController.getBalances
);

// API-012: POST /api/inventory/transactions
inventoryRouter.post(
  '/transactions',
  authorize([ROLES.INVENTORY_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(stockTransactionSchema),
  inventoryController.recordTransaction
);

// POST /api/inventory/transfer
inventoryRouter.post(
  '/transfer',
  authorize([ROLES.INVENTORY_MANAGER, ROLES.WAREHOUSE_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(stockTransferSchema),
  inventoryController.transfer
);

export const showroomRouter = Router();
showroomRouter.use(authenticate);

// FN-STORE-001: Register Showroom
showroomRouter.post(
  '/',
  authorize([ROLES.ADMIN, ROLES.SUPER_ADMIN, ROLES.INVENTORY_MANAGER]),
  validate(registerShowroomSchema),
  showroomController.register
);

// FN-STORE-003: Book private visit
showroomRouter.post('/:id/visits', validate(bookVisitSchema), showroomController.bookVisit);

// FN-STORE-004: In-store order
showroomRouter.post(
  '/orders',
  authorize([ROLES.ADMIN, ROLES.INVENTORY_MANAGER]),
  validate(inStoreOrderSchema),
  showroomController.inStoreOrder
);

// FN-STORE-005: Order handover
showroomRouter.put(
  '/orders/:id/handover',
  authorize([ROLES.WAREHOUSE_MANAGER, ROLES.ADMIN]),
  showroomController.handoverOrder
);

// FN-STORE-006: Showroom day list
showroomRouter.get(
  '/:id/day',
  authorize([ROLES.INVENTORY_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  showroomController.getDayList
);
