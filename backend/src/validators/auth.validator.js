/**
 * Auth Request Schemas (FN-IAM-001)
 */

import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Valid email format required').max(254),
  password: z.string().min(1, 'Password is required').max(128)
});
