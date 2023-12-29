import { Request, Response } from 'express';
import { createEventInstance } from './createEvent';
import { getAllEventsInstance } from './getAllEvents';
import { getEventByIdInstance } from './getEventById';
import { deleteEventInstance } from './deleteEventId';
import { deleteEventByDayInstance } from './deleteEventByDay';

class EventsController {

    createEvent(req: Request, res: Response): void {
        createEventInstance.createEvent(req, res);
    }

    getAllEvents(req: Request, res: Response): void {
        getAllEventsInstance.getAllEvents(req, res);
    }

    getEventById(req: Request, res: Response): void {
        getEventByIdInstance.getEventById(req, res);
    }

    deleteEventId(req: Request, res: Response): void {
        deleteEventInstance.deleteEventId(req, res);
    }

    deleteEventByDay(req: Request, res: Response): void {
        deleteEventByDayInstance.deleteEventByDay(req, res);
    }
}

export const eventsController = new EventsController();