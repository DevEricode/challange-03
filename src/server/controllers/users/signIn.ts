import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userSchema from '../../shared/models/userSchema';

const collectionName = process.env.DB_COLLECTION1 || 'collection_users';

const User = model('User', userSchema, collectionName);

class SignInController {
    async signIn(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;

            if (!password) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Password is required' });
            }

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
            }

            if (!user.password) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred during login' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id }, process.env.SECRET as string, {
                expiresIn: '4w',
            });

            res.header('Authorization', `Bearer ${token}`);

            return res.status(StatusCodes.OK).json({ message: 'Login successful' });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred during login' });
        }
    }
}

export const signInControllerInstance = new SignInController();
