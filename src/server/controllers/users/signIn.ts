// signIn.controller.ts
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../../shared/services/users/signInService';

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
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Password is required' });
        };

        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        };

        if (!user.password) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred during login' });
        };

        const isPasswordValid = await this.userService.validatePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        };

        const token = this.userService.generateToken(user._id);

        res.header('Authorization', `Bearer ${token}`);

        return res.status(StatusCodes.OK).json({ message: 'Login successful' });
    };
};

export const signInControllerInstance = new SignInController(new UserService());
