import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class GetEventById {

    getEventById(req: Request, res: Response): void {
        res.status(StatusCodes.OK).json({ message: 'Getting event by id.' });
    }
}

export const getEventByIdInstance = new GetEventById();