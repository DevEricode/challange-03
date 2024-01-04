import { model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userSchema from '../../models/userSchema';
import userInterface from '../../interface/userInterface';
import 'dotenv/config';


const collectionName = process.env.DB_COLLECTION1 || 'collection_users';

const User = model<userInterface>('User', userSchema, collectionName);

export class UserService {
    async getUserByEmail(email: string): Promise<userInterface | null> {
        return await User.findOne({ email });
    };

    async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    };

    generateToken(userId: string): string {
        return jwt.sign({ userId }, process.env.SECRET as string, {
            expiresIn: '4w',
        });
    };
};
