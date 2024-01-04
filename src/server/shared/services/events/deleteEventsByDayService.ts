import { model } from 'mongoose';
import eventSchema from '../../models/eventSchema';
import 'dotenv/config';

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';
const Event = model('Event', eventSchema, collectionName);

export class EventService {
    async deleteEventsByDay(dayOfWeek: string) {

        const eventsToDelete = await Event.find({ dayOfWeek });

        await Event.deleteMany({ dayOfWeek });

        return eventsToDelete;
    };
};
