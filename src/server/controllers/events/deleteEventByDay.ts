import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/deleteEventsByDayService';
import throwErr from '../../shared/errors/handleError';

interface RequestWithQuery extends Request {
    query: {
        dayOfWeek?: string;
    };
};

export class DeleteEventsByDayController {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    };

    async deleteEventsByDay(req: RequestWithQuery, res: Response): Promise<Response> {
        const { dayOfWeek } = req.query;

        if (!dayOfWeek || typeof dayOfWeek !== 'string') {
            throwErr(8);
        };

        const deletedEvents = await this.eventService.deleteEventsByDay(dayOfWeek);

        return res.status(StatusCodes.OK).json(deletedEvents);

    };
};

export const deleteEventsByDayInstance = new DeleteEventsByDayController(new EventService());