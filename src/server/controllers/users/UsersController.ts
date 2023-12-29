import { Request, Response } from 'express';
import { signInControllerInstance } from './signIn';
import { signUpControllerInstance } from './signUp';

class UsersController {
    signIn(req: Request, res: Response): void {
        signInControllerInstance.signIn(req, res);
    }

    signUp(req: Request, res: Response): void {
        signUpControllerInstance.signUp(req, res);
    }
}

export const usersController = new UsersController();