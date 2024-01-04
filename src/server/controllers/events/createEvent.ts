import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import eventSchema from '../../shared/models/eventSchema';
import { ObjectId } from 'mongodb';
import { model } from 'mongoose';
import 'dotenv/config';

interface RequestWithUser extends Request {
    userId?: string;
}

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';

const Event = model('Event', eventSchema, collectionName);

class createEventController {
    async createEvent(req: RequestWithUser, res: Response): Promise<Response> {
        const eventData = req.body;

        if (!req.userId) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'userId is required.' });
        }

        try {

            const newEvent = new Event({
                ...eventData,
                _id: new ObjectId(),
                userId: req.userId,
            });

            await newEvent.save();

            return res.status(StatusCodes.OK).json({ message: 'Successful operation.' });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.', details: error });
        }
    }
}

export const createEventsInstance = new createEventController();