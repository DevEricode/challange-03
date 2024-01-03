import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userSchema from '../../shared/models/userSchema';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import { model } from 'mongoose';
import 'dotenv/config';

const collectionName = process.env.DB_COLLECTION1 || 'collection_users';

const User = model('User', userSchema, collectionName);

class SignUpController {
    async signUp(req: Request, res: Response): Promise<Response> {
        const userData = req.body;
        userData.email = userData.email.toLowerCase();

        const newUser = new User({
            ...userData,
            _id: new ObjectId(),
        });

        try {
            await newUser.validate();
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid Input.', details: error });
        }

        try {
            const emailExists = await User.findOne({ email: userData.email });
            
            if (emailExists) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email already in use.' });
            }

            const hashedPassword = await bcrypt.hash(userData.password, 10);
            newUser.password = hashedPassword;

            const hashedConfirmPassword = await bcrypt.hash(userData.confirmPassword, 10);
            newUser.confirmPassword = hashedConfirmPassword;

            await newUser.save();

            return res.status(StatusCodes.CREATED).json({ message: 'User created.' });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'An error occurred.' });
        }
    }
}

export const signUpControllerInstance = new SignUpController();