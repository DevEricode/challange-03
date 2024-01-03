import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

function fallbackMiddleware(_: Request, res: Response, __: NextFunction) {
    res.status(StatusCodes.NOT_FOUND).json({
        error: {
            message: 'Especified route does not exist.',
            type: 'route not found',
        },
    });
}
export default fallbackMiddleware;