import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/getEventsByDayService';

class GetEventsByDayController {
    eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    async getEventsByDay(req: Request, res: Response): Promise<Response> {
        const dayOfWeek = req.query.dayOfWeek;

        if (!dayOfWeek || typeof dayOfWeek !== 'string') {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid data supplied.' });
        }

        try {
            const events = await this.eventService.getEventsByDay(dayOfWeek);
            if (events.length === 0) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Event not found.' });
            }

            return res.status(StatusCodes.OK).json({ message: 'Successful operation.', events });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
        }
    }
}

export const getEventsByDaysInstance = new GetEventsByDayController(new EventService());