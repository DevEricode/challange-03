import { Document } from 'mongoose';

interface Events extends Document {
    description: string;
    dayOfWeek: string;
};

export default Events;