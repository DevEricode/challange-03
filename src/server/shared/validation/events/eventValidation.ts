import Joi from 'joi';
import { description, dayOfWeek } from './eventRegex';


export const createEvent = Joi.object({
    description: Joi.string().regex(description).min(6).required(),
    dayOfWeek: Joi.string().regex(dayOfWeek).min(3).required(),
});