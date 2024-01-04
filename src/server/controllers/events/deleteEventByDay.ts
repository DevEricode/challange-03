import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/deleteEventsByDayService';

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
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid data supplied.' });
        };

        try {

            const deletedEvents = await this.eventService.deleteEventsByDay(dayOfWeek);

            return res.status(StatusCodes.OK).json(deletedEvents);

        } catch (error) {
            
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.', details: error });
        };
    };
};

export const deleteEventsByDayInstance = new DeleteEventsByDayController(new EventService());