/**
 * Event Request Schemas (FN-EVT-001, FN-EVT-003, FN-EVT-005, FN-EVT-007)
 */

import { z } from 'zod';

export const createEventSchema = z.object({
  name: z.string().min(1).max(200),
  startsOn: z.string().date(),
  venue: z.string().min(1).max(255),
  status: z.enum(['draft', 'published']).default('draft')
});

export const addGuestSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  guestType: z.enum(['vip', 'press', 'guest', 'staff-guest']),
  customerId: z.string().uuid().optional()
});

export const guestRegistrationSchema = z.object({
  reference: z.string().min(32).max(128),
  attendance: z.enum(['accept', 'decline'])
});

export const checkInSchema = z.object({
  reference: z.string().min(1).max(128)
});
