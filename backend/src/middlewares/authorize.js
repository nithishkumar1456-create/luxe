/**
 * Authorization Middleware (FN-IAM-002)
 * Enforces role-based permissions on protected endpoints.
 */

import { errorResponse } from '../utils/envelope.js';
import { logger } from '../utils/logger.js';

export const authorize = (allowedRoles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return errorResponse(res, 401, 'Unauthenticated', 'UNAUTHENTICATED');
    }

    const userRoles = req.user.roles || [];
    const hasRole = userRoles.some(role => allowedRoles.includes(role));

    if (!hasRole) {
      logger.warn('Forbidden access attempt', {
        userId: req.user.id,
        route: req.originalUrl,
        userRoles,
        requiredRoles: allowedRoles
      });
      return errorResponse(res, 403, 'You cannot do that.', 'FORBIDDEN');
    }

    next();
  };
};
