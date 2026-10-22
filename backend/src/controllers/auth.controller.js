/**
 * Auth Controller (API-001)
 */

import { authService } from '../services/auth.service.js';
import { successResponse } from '../utils/envelope.js';

export const authController = {
  async login(req, res, next) {
    try {
      const result = await authService.login(req.body);
      return successResponse(res, 200, 'Login successful', result);
    } catch (err) {
      next(err);
    }
  },

  async getMe(req, res, next) {
    try {
      const profile = await authService.getProfile(req.user.id);
      return successResponse(res, 200, 'Profile retrieved', profile);
    } catch (err) {
      next(err);
    }
  }
};
