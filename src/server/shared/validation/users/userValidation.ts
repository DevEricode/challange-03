import Joi from 'joi';
import { nameRegex, dateRegex, addressRegex, emailRegex, passwordRegex } from './userRegex';


export const createUser = Joi.object({
    firstName: Joi.string().regex(nameRegex).min(3).required(),
    lastName: Joi.string().regex(nameRegex).min(3).required(),
    birthDate: Joi.string().regex(dateRegex).min(2).required(),
    city: Joi.string().regex(addressRegex).min(3).required(),
    country: Joi.string().regex(addressRegex).min(2).required(),
    email: Joi.string().regex(emailRegex).email().required(),
    password: Joi.string().regex(passwordRegex).min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});