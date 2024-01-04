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

    try {
        const decoded = jwt.verify(token, process.env.SECRET as string) as JwtPayload;

        req.userId = decoded.userId;

        next();
        
    } catch (error) {

        if (error instanceof jwt.TokenExpiredError) {

            return res.status(401).json({ auth: false, message: 'Token expired.' });

        } else if (error instanceof jwt.JsonWebTokenError) {

            return res.status(401).json({ auth: false, message: 'Invalid token.' });

        } else {

            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        }
    }
};

export default validateJWT;