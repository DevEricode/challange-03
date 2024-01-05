import { Request, Response } from 'express';
import { signInControllerInstance } from './signIn';
import { signUpControllerInstance } from './signUp';

class UsersController {
    async signIn(req: Request, res: Response) {
        return await signInControllerInstance.signIn(req, res);
    }

    async signUp(req: Request, res: Response) {
        return await signUpControllerInstance.signUp(req, res);
    }
}

export const usersController = new UsersController();