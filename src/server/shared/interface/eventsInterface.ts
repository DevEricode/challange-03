import { Document } from 'mongoose';

interface Events extends Document {
    description: string;
    dayOfWeek: string;
    userId: string;
};

export default Events;