/**
 * Request Validation Middleware using Zod
 * Rejects invalid payloads prior to controller execution.
 */

import { errorResponse } from '../utils/envelope.js';

export const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    try {
      const parsed = schema.parse(req[source]);
      req[source] = parsed;
      next();
    } catch (err) {
      const issues = err.issues || err.errors || [];
      const messages = issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', ');
      return errorResponse(res, 400, messages || 'Validation error', 'VALIDATION_ERROR');
    }
  };
};
