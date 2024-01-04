import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/createEventService';

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
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'userId is required.' });
        };

        try {
            const newEvent = await this.eventService.createEvent(eventData, req.userId);
            return res.status(StatusCodes.OK).json({ message: 'Successful operation.', event: newEvent });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.', details: error });
        };
    };
};

export const createEventsInstance = new CreateEventController(new EventService());