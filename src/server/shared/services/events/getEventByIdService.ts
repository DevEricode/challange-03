import eventSchema from '../../models/eventSchema';
import { model } from 'mongoose';
import 'dotenv/config';

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';
const Event = model('Event', eventSchema, collectionName);

export class EventService {
    async getEventById(eventId: string) {
        if (!eventId || typeof eventId !== 'string') {

            throw new Error('Invalid data supplied.');

        };

        const event = await Event.findById(eventId);

        if (!event) {

            throw new Error('Event not found.');
        };

        const responseBody = {

            id: event._id,
            description: event.description,
            dayOfWeek: event.dayOfWeek,
            userId: event.userId,
            
        };

        return responseBody;
    };
};