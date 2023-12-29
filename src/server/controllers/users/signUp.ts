import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class SignUpController {
    signUp(req: Request, res: Response): void {
        res.status(StatusCodes.CREATED).json({ message: 'User created successfully.' });
    }
}

export const signUpControllerInstance = new SignUpController();