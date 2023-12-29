import { Document } from 'mongoose';

interface User extends Document {
    firstname: string;
    lastName: string;
    birthDate: number;
    city: string;
    country: string;
    email: string;
    password: string;
    confirmPassword: string;

};

export default User;