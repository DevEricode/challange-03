import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EventService } from '../../shared/services/getEventByIdService';


export class GetEventByIdController {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    async getEventById(req: Request, res: Response): Promise<Response> {
        const eventId = req.params.id;

        try {
            const event = await this.eventService.getEventById(eventId);
            return res.status(StatusCodes.OK).json({ message: 'Successful operation.', event });
        } catch (error : any) {
        
            if (error.message === 'Invalid data supplied.') {

                return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });

            } else if (error.message === 'Event not found.') {

                return res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
                
            } else {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
            }
        }
    }
}

export const getEventByIdInstance = new GetEventByIdController(new EventService());