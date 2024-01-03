import { Request, Response } from 'express';
import { createEventsInstance } from './createEvent';
import { getEventsByDayInstance } from './getEventsByDay';
import { getEventByIdInstance } from './getEventById';
import { deleteEventInstance } from './deleteEventId';
import { deleteEventByDayInstance } from './deleteEventByDay';

class EventsController {

    createEvent(req: Request, res: Response): void {
        createEventsInstance.createEvent(req, res);
    }

    getEventsByDay(req: Request, res: Response): void {
        getEventsByDayInstance.getEventsByDay(req, res);
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