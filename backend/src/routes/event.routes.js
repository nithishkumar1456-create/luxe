/**
 * Event Routes (API-013 to API-016, FN-EVT-001 to FN-EVT-010)
 */

import { Router } from 'express';
import { eventController } from '../controllers/event.controller.js';
import { authenticate } from '../middlewares/authenticate.js';
import { authorize } from '../middlewares/authorize.js';
import { validate } from '../middlewares/validate.js';
import {
  createEventSchema,
  addGuestSchema,
  guestRegistrationSchema,
  checkInSchema
} from '../validators/event.validator.js';
import { ROLES } from '../config/constants.js';

const router = Router();

// Public Guest Registration Confirm (FN-EVT-005)
router.post(
  '/registrations/confirm',
  validate(guestRegistrationSchema),
  eventController.confirmRegistration
);

// Protected Staff Event Routes
router.use(authenticate);

// API-013: GET /api/events
router.get(
  '/',
  authorize([ROLES.EVENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  (req, res, next) => eventController.createEvent(req, res, next) // Placeholder handler
);

// API-014: POST /api/events
router.post(
  '/',
  authorize([ROLES.EVENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(createEventSchema),
  eventController.createEvent
);

// API-015: POST /api/events/:id/guests
router.post(
  '/:id/guests',
  authorize([ROLES.EVENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(addGuestSchema),
  eventController.addGuest
);

// POST /api/events/:id/invitations
router.post(
  '/:id/invitations',
  authorize([ROLES.EVENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  eventController.sendInvitation
);

// API-016: POST /api/events/:id/check-in
router.post(
  '/:id/check-in',
  authorize([ROLES.EVENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  validate(checkInSchema),
  eventController.checkIn
);

// PUT /api/events/:id/close-registration
router.put(
  '/:id/close-registration',
  authorize([ROLES.EVENT_MANAGER, ROLES.ADMIN, ROLES.SUPER_ADMIN]),
  eventController.closeRegistration
);

export default router;
