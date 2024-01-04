import { model } from 'mongoose';
import bcrypt from 'bcrypt';
import userSchema from '../../models/userSchema';
import UserInterface from '../../interface/userInterface';
import { ObjectId } from 'mongodb';
import 'dotenv/config';

const collectionName = process.env.DB_COLLECTION1 || 'collection_users';
const User = model<UserInterface>('User', userSchema, collectionName);

export class UserService {
    async createUser(userData: any): Promise<UserInterface> {
        userData.email = userData.email.toLowerCase();
        const newUser = new User({
            ...userData,
            _id: new ObjectId(),
        });
        await newUser.validate();
        return newUser;
    };

    async checkEmailExists(email: string): Promise<boolean> {
        const emailExists = await User.findOne({ email });
        return !!emailExists;
    };

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    };

    async saveUser(user: UserInterface): Promise<UserInterface> {
        return await user.save();
    };
};