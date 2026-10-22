/**
 * Event Controller (API-013 to API-016, FN-EVT-001 to 010)
 */

import { eventService } from '../services/event.service.js';
import { successResponse } from '../utils/envelope.js';

export const eventController = {
  async createEvent(req, res, next) {
    try {
      const event = await eventService.createEvent(req.body, req.user.id);
      return successResponse(res, 201, 'Event created with 9 milestones', event);
    } catch (err) {
      next(err);
    }
  },

  async addGuest(req, res, next) {
    try {
      const guest = await eventService.addGuest(req.params.id, req.body, req.user.id);
      return successResponse(res, 201, 'Guest added', guest);
    } catch (err) {
      next(err);
    }
  },

  async sendInvitation(req, res, next) {
    try {
      const inv = await eventService.sendInvitation(req.params.id, req.body.guestId, req.user.id);
      return successResponse(res, 201, 'Invitation sent', inv);
    } catch (err) {
      next(err);
    }
  },

  async confirmRegistration(req, res, next) {
    try {
      const reg = await eventService.confirmGuestRegistration(req.body.reference, req.body.attendance);
      return successResponse(res, 200, 'Registration confirmed', reg);
    } catch (err) {
      next(err);
    }
  },

  async checkIn(req, res, next) {
    try {
      const checkInResult = await eventService.checkInGuest(req.params.id, req.body.reference, req.user.id);
      return successResponse(res, 200, 'Guest checked in', checkInResult);
    } catch (err) {
      next(err);
    }
  },

  async closeRegistration(req, res, next) {
    try {
      const updated = await eventService.closeRegistration(req.params.id, req.user.id);
      return successResponse(res, 200, 'Registration closed', updated);
    } catch (err) {
      next(err);
    }
  }
};
