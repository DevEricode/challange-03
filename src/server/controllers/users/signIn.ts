import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { model } from 'mongoose';
import bcrypt from 'bcrypt';
import userSchema from '../../shared/models/userSchema';

const collectionName = process.env.DB_COLLECTION1 || 'collection_users';

const User = model('User', userSchema, collectionName);

class SignInController {
    async signIn(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
            }


            return res.status(StatusCodes.OK).json({ message: 'Login successful' });
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred during login' });
        }
    }
}

export const signInControllerInstance = new SignInController();