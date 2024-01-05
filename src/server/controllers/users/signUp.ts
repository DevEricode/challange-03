import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../../shared/services/users/signUpService';
import throwErr from '../../shared/errors/handleError';

export class SignUpController {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    };

    async signUp(req: Request, res: Response): Promise<Response> {
        const userData = req.body;


        const newUser = await this.userService.createUser(userData);

        if (await this.userService.checkEmailExists(userData.email)) {

            throwErr(7);

        };

        newUser.password = await this.userService.hashPassword(userData.password);
        
        newUser.confirmPassword = await this.userService.hashPassword(userData.confirmPassword);

        await this.userService.saveUser(newUser);

        return res.status(StatusCodes.CREATED).json({ message: 'User created.' });

    };
};

export const signUpControllerInstance = new SignUpController(new UserService());
