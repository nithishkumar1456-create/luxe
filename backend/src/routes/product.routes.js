/**
 * Product & Catalogue Routes (API-002 to API-006)
 */

import { Router } from 'express';
import { catalogueController } from '../controllers/catalogue.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
import { authorize } from '../middlewares/authorize.js';
import { validate } from '../middlewares/validate.js';
import { createProductSchema, updateProductSchema } from '../validators/catalogue.validator.js';
import { ROLES } from '../config/constants.js';

const router = Router();

// API-002: GET /api/products
router.get('/', catalogueController.getProducts);

// API-003: GET /api/products/:id
router.get('/:id', catalogueController.getProductById);

// API-004: POST /api/products (Admin, Super Admin)
router.post(
  '/',
  authenticate,
  authorize([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(createProductSchema),
  catalogueController.createProduct
);

// API-005: PUT /api/products/:id (Admin, Super Admin)
router.put(
  '/:id',
  authenticate,
  authorize([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(updateProductSchema),
  catalogueController.updateProduct
);

// API-006: DELETE /api/products/:id (Admin, Super Admin - soft deactivate)
router.delete(
  '/:id',
  authenticate,
  authorize([ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  catalogueController.deactivateProduct
);

export default router;
