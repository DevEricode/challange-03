import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import userSchema from '../../shared/models/userSchema';
import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';
import { model } from 'mongoose';
import 'dotenv/config';

const User = model('User', userSchema);

class SignUpController {
    async signUp(req: Request, res: Response): Promise<Response> {
        const userData = req.body;

        const newUser = new User({
            ...userData,
            _id: new ObjectId(), 
        });

        try {
            await newUser.validate();
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid Input.', details: error });
        }

        const client = new MongoClient(process.env.URI!);

        try {
            await client.connect();

            const emailExists = await this.emailExistsInDatabase(client, userData.email);
            if (emailExists) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email already in use.' });
            }

            const hashedPassword = await bcrypt.hash(userData.password, 10);
            newUser.password = hashedPassword;

            await newUser.save();

            return res.status(StatusCodes.CREATED).json({ message: 'User created.' });
        } finally {

            await client.close();
        }
    }

    async emailExistsInDatabase(client: MongoClient, email: string): Promise<boolean> {
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.DB_COLLECTION!);

        const existingUser = await collection.findOne({ email });
        return !!existingUser;
    }
}

export const signUpControllerInstance = new SignUpController();