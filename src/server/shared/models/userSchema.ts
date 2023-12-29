import { Schema } from 'mongoose';
import User from '../../shared/interface/userInterface';

const userSchema = new Schema<User>({
    firstname: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
});

export default userSchema;