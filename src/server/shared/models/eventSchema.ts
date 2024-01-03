import { Schema } from 'mongoose';
import Events from '../../shared/interface/eventsInterface';

const eventSchema = new Schema<Events>({
    description: { type: String, required: true },
    dayOfWeek: { type: String, required: true },
    userId: {type: String, required: true}
});

export default eventSchema;