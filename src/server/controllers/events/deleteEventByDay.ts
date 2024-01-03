import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import eventSchema from '../../shared/models/eventSchema';
import { model } from 'mongoose';

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';

const Event = model('Event', eventSchema, collectionName);

class deleteEventsByDayController {
    async deleteEventsByDay(req: Request, res: Response): Promise<Response> {
        const dayOfWeek = req.query.dayOfWeek;

        if (!dayOfWeek || typeof dayOfWeek !== 'string') {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid data supplied.' });
        }

        try {
            const events = await Event.deleteMany({ dayOfWeek });
            if (events.deletedCount === 0) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Event not found.' });
            }

            return res.status(StatusCodes.OK).json({ message: 'List of deleteDailyEvents', deletedEvents: events.deletedCount });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
        }
    }
}

export const deleteEventsByDayInstance = new deleteEventsByDayController();