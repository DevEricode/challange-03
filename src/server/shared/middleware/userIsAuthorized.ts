import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface RequestWithUser extends Request {
    userId: string;
}

class Authorization {
    private secret: Secret;

    constructor(secret: Secret) {
        this.secret = secret;
    }

    userIsAuthorized(req: RequestWithUser, res: Response, next: NextFunction): Response | void {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'No token provided.' });
        }

        const parts = authHeader.split(' ');

        if (parts.length !== 2) {
            return res.status(401).json({ message: 'Token error.' });
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).json({ message: 'Token malformatted.' });
        }

        try {
            const decoded = jwt.verify(token, this.secret) as JwtPayload;
            req.userId = decoded.id;
            return next();
        } catch (err) {
            return res.status(401).json({ message: 'Token invalid.' });
        }
    }
}

export default new Authorization(process.env.SECRET as Secret);