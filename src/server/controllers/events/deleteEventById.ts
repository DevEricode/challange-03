import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/deleteEventByIdService';
import throwErr from '../../shared/errors/handleError';

class DeleteEventByIdController {
    eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    };

    async deleteEventById(req: Request, res: Response): Promise<Response> {
        const eventId = req.params.id;

        const event = await this.eventService.deleteEventById(eventId);

        if (!event) {

            throwErr(6);

        };

        return res.status(StatusCodes.NO_CONTENT).send();
            
    };
};

export const deleteEventByIdInstance = new DeleteEventByIdController(new EventService());
