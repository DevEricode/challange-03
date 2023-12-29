import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class CreateEvent {

    createEvent(req: Request, res: Response): void {
        res.status(StatusCodes.OK).json({ message: 'Event created successfully.' });
    }
}

export const createEventInstance = new CreateEvent();