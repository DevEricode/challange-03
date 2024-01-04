import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../../shared/services/users/signUpService';

export class SignUpController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    };

    async signUp(req: Request, res: Response): Promise<Response> {
        const userData = req.body;

        try {
            const newUser = await this.userService.createUser(userData);

            if (await this.userService.checkEmailExists(userData.email)) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email already in use.' });
            };

            newUser.password = await this.userService.hashPassword(userData.password);
            newUser.confirmPassword = await this.userService.hashPassword(userData.confirmPassword);

            await this.userService.saveUser(newUser);

            return res.status(StatusCodes.CREATED).json({ message: 'User created.' });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
        };
    };
};

export const signUpControllerInstance = new SignUpController(new UserService());
