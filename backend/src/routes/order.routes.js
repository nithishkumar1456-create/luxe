/**
 * Order Routes (API-007 to API-010)
 */

import { Router } from 'express';
import { orderController } from '../controllers/order.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validate } from '../middlewares/validate.js';
import { checkoutAddressSchema, updateOrderStatusSchema } from '../validators/order.validator.js';

const router = Router();
router.use(authenticate);

// Start checkout (capture address & calculate total)
router.post('/checkout/address', validate(checkoutAddressSchema), orderController.checkout);

// API-007: POST /api/orders
router.post('/', orderController.createOrder);

// API-008: GET /api/orders
router.get('/', orderController.getOrders);

// API-009: GET /api/orders/:id
router.get('/:id', orderController.getOrderById);

// API-010: PUT /api/orders/:id/status
router.put('/:id/status', validate(updateOrderStatusSchema), orderController.updateStatus);

export default router;
