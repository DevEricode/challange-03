import { model } from 'mongoose';
import eventSchema from '../../models/eventSchema';
import 'dotenv/config';

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';
const Event = model('Event', eventSchema, collectionName);

export class EventService {
    async getEventsByDay(dayOfWeek: string) {
        const events = await Event.find({ dayOfWeek });
        return events.map(event => ({
            id: event._id,
            description: event.description,
            dayOfWeek: event.dayOfWeek,
            userId: event.userId,
        }));
    };
};