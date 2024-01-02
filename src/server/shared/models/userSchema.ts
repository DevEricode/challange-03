import { Schema } from 'mongoose';
import User from '../../shared/interface/userInterface';


const userSchema = new Schema<User>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true,  unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
});

userSchema.index({ email: 1 }, { unique: true });

export default userSchema;