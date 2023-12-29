import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class DeleteEventByDay {

    deleteEventByDay(req: Request, res: Response): void {
        res.status(StatusCodes.OK).json({ message: 'Events on the day successfully deleted.' });
    }
}

export const deleteEventByDayInstance = new DeleteEventByDay();