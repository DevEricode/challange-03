import mongoose, { model } from 'mongoose';
import eventSchema from '../../models/eventSchema';
import 'dotenv/config';
import throwErr from '../../errors/handleError';

const collectionName = process.env.DB_COLLECTION2 || 'collection_events';
const Event = model('Event', eventSchema, collectionName);

export class EventService {
    async deleteEventById(eventId: string) {

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            throwErr(4);
        }
        
        return await Event.findByIdAndDelete(eventId);
    };
};
