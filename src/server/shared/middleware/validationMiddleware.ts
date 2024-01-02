import { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';


export const validateSchemas = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);

        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join(', ');
            return res.status(400).json({ error: errorMessage });
        }

        next();
    };
};