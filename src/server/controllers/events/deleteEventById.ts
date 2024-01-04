import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/events/deleteEventByIdService';

class DeleteEventByIdController {
    eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    };

    async deleteEventById(req: Request, res: Response): Promise<Response> {
        const eventId = req.params.id;

        if (!eventId || typeof eventId !== 'string') {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid ID supplied.' });
        };

        try {

            const event = await this.eventService.deleteEventById(eventId);

            if (!event) {

                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Event not found.' });

            };

            return res.status(StatusCodes.NO_CONTENT).send();
            
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
        };
    };
};

export const deleteEventByIdInstance = new DeleteEventByIdController(new EventService());
