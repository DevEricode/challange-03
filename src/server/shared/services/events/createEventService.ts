import eventSchema from '../../models/eventSchema';
import { ObjectId } from 'mongodb';
import { model } from 'mongoose';
import 'dotenv/config';


const collectionName = process.env.DB_COLLECTION2 || 'collection_events';
const Event = model('Event', eventSchema, collectionName);

export class EventService {
    async createEvent(eventData: Event, userId: string) {
        const newEvent = new Event({
            ...eventData,
            _id: new ObjectId(),
            userId: userId,
        });

        await newEvent.save();
        return newEvent;
    };
};