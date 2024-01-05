import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/createEventService';
import throwErr from '../../shared/errors/handleError';

interface RequestWithUser extends Request {
    userId?: string;
};

export class CreateEventController {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    };

    async createEvent(req: RequestWithUser, res: Response): Promise<Response> {
        const eventData = req.body;

        if (!req.userId) {
            throwErr(5);
        };


        const newEvent = await this.eventService.createEvent(eventData, req.userId);

        return res.status(StatusCodes.OK).json({ message: 'Successful operation.', event: newEvent });

    };
};

export const createEventsInstance = new CreateEventController(new EventService());