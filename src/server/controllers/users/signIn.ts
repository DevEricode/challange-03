import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class SignInController {
    signIn(req: Request, res: Response): void {
        res.status(StatusCodes.OK).json({ message: 'Login bem-sucedido' });
    }
}

export const signInControllerInstance = new SignInController();