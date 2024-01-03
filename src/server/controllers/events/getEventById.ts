import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import eventSchema from '../../shared/models/eventSchema';
import { model } from 'mongoose';

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';

const Event = model('Event', eventSchema, collectionName);

class getEventByIdController {
    async getEventById(req: Request, res: Response): Promise<Response> {
        const eventId = req.params.id;

        if (!eventId || typeof eventId !== 'string') {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid data supplied.' });
        }

        try {
            const event = await Event.findById(eventId);
            if (!event) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Event not found.' });
            }

            const responseBody = {
                id: event._id,
                description: event.description,
                dayOfWeek: event.dayOfWeek,
                userId: event.userId,
            };

            return res.status(StatusCodes.OK).json({ message: 'Successful operation.', event: responseBody });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
        }
    }
}

export const getEventByIdInstance = new getEventByIdController();