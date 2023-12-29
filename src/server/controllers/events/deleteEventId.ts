import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class DeleteEventId {

    deleteEventId(req: Request, res: Response): void {
        res.status(StatusCodes.OK).json({ message: 'Event deleted successfully.' });
    }
}

export const deleteEventInstance = new DeleteEventId();