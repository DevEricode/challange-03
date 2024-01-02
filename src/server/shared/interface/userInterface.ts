import { Document } from 'mongoose';

interface User extends Document {
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    country: string;
    email: string;
    password: string;
    confirmPassword: string;

};

export default User;