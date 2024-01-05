import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/getEventsByDayService';
import throwErr from '../../shared/errors/handleError';

class GetEventsByDayController {
    eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    };

    async getEventsByDay(req: Request, res: Response): Promise<Response> {
        const dayOfWeek = req.query.dayOfWeek;

        if (!dayOfWeek || typeof dayOfWeek !== 'string') {
            throwErr(8);
        };


        const events = await this.eventService.getEventsByDay(dayOfWeek);
        if (events.length === 0) {
            throwErr(6);
        }

        return res.status(StatusCodes.OK).json({ message: 'Successful operation.', events });
            
    };
};

export const getEventsByDaysInstance = new GetEventsByDayController(new EventService());