import { Request, Response, NextFunction } from 'express';
import ApplicationError from '../errors/aplicationError';

function errorMiddleware(
    errorObj: unknown,
    _: Request,
    res: Response,
    __: NextFunction,
): void {
    if (errorObj instanceof ApplicationError) {
        const { code, message, type, http_code } = errorObj;
        res.status(http_code).json({
            error: {
                code,
                message,
                type,
            },
        });
    } else {
        const unk_error = errorObj as Error;
        res.status(500).json({
            error: {
                code: 500,
                message: unk_error,
                type: 'INTERNAL_SERVER_ERROR',
            },
        });
    }
}

export default errorMiddleware;