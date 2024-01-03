import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
    userId?: string;
}

const validateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ auth: false, message: 'No token provided.' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.SECRET as string, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ auth: false, message: 'Token expired.' });
            } else if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({ auth: false, message: 'Invalid token.' });
            } else {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
        }

        const jwtPayload = decoded as JwtPayload;

        if (jwtPayload) {
            req.userId = jwtPayload.id;
            next();
        } else {
            return res.status(500).json({ auth: false, message: 'Failed to decode token.' });
        }
    });
};

export default validateJWT;