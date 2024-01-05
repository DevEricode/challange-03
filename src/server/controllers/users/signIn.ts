// signIn.controller.ts
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../../shared/services/users/signInService';
import throwErr from '../../shared/errors/handleError';

interface RequestWithUser extends Request {
    userId?: string;
};

export class SignInController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    };

    async signIn(req: RequestWithUser, res: Response): Promise<Response> {
        const { email, password } = req.body;

        if (!password) {
            throwErr(9);
        };

        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            throwErr(10);
        };

        if (!user.password) {
            throwErr(11);
        };

        const isPasswordValid = await this.userService.validatePassword(password, user.password);

        if (!isPasswordValid) {
            throwErr(10);
        };

        const token = this.userService.generateToken(user._id);

        res.header('Authorization', `Bearer ${token}`);

        return res.status(StatusCodes.OK).json({ message: 'Login successful' });
    };
};

export const signInControllerInstance = new SignInController(new UserService());
