import { Request, Response } from 'express';
import { createEventsInstance } from './createEvent';
import { getEventsByDaysInstance } from './getEventsByDay';
import { getEventByIdInstance } from './getEventById';
import { deleteEventByIdInstance } from './deleteEventById';
import { deleteEventsByDayInstance } from './deleteEventByDay';

class EventsController {

    async createEvent(req: Request, res: Response) {
        return await createEventsInstance.createEvent(req, res);
    }

    async getEventsByDay(req: Request, res: Response) {
        return  await getEventsByDaysInstance.getEventsByDay(req, res);
    }

    async getEventById(req: Request, res: Response) {
        return await getEventByIdInstance.getEventById(req, res);
    }

    async deleteEventId(req: Request, res: Response) {
        return await deleteEventByIdInstance.deleteEventById(req, res);
    }

    async deleteEventByDay(req: Request, res: Response) {
        return await deleteEventsByDayInstance.deleteEventsByDay(req, res);
    }
}

export const eventsController = new EventsController();