import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
    userId?: string;
}

const validateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, process.env.SECRET as string, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }

        const jwtPayload = decoded as JwtPayload;

        if (jwtPayload) {
            req.userId = jwtPayload.id;
            next();
        } else {
            return res.status(500).send({ auth: false, message: 'Failed to decode token.' });
        }
    });
};

export default validateJWT;