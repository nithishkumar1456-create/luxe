/**
 * Order Request Schemas (FN-ECOM-007, FN-ECOM-008, FN-ECOM-010)
 */

import { z } from 'zod';
import { ORDER_STATUS } from '../config/constants.js';

export const checkoutAddressSchema = z.object({
  addressId: z.string().uuid().optional(),
  name: z.string().min(1).max(120).optional(),
  phone: z.string().min(1).max(50).optional(),
  line1: z.string().min(1).max(200).optional(),
  city: z.string().min(1).max(100).optional(),
  region: z.string().min(1).max(100).optional(),
  postalCode: z.string().min(1).max(50).optional(),
  country: z.string().min(1).max(100).optional()
});

export const updateOrderStatusSchema = z.object({
  status: z.enum(Object.values(ORDER_STATUS))
});
