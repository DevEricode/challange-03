import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class GetAllEvents {

    getAllEvents(req: Request, res: Response): void {
        res.status(StatusCodes.OK).json({ message: 'All events.' });
    }
}

export const getAllEventsInstance = new GetAllEvents();