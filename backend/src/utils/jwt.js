/**
 * JWT Helper Utilities
 * Signs and verifies authentication tokens according to FN-IAM-001 & FN-IAM-002
 */

import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export const signToken = (payload) => {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, config.jwt.secret);
};
