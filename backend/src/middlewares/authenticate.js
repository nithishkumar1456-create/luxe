/**
 * Authentication Middleware (FN-IAM-002)
 * Verifies Bearer JWT token on protected routes.
 */

import { verifyToken } from '../utils/jwt.js';
import { errorResponse } from '../utils/envelope.js';

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return errorResponse(res, 401, 'Authentication token missing or invalid', 'UNAUTHENTICATED');
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // { id, email, roles }
    next();
  } catch (_err) {
    return errorResponse(res, 401, 'Token expired or invalid', 'TOKEN_INVALID');
  }
};
