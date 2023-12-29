import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';
import ApplicationError from '../errors/aplicationError';

export function validationSchemaMiddleware(schema: Joi.Schema): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((detail) => detail.message);
            throw new ApplicationError(
                400,
                errors.toString().replace(/"/g, '\''),
                'VALIDATION_ERRORS',
                400,
            );
        }
        next();
    };
}