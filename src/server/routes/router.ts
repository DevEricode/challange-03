import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { usersController } from '../controllers/users/UsersController';
import { eventsController } from '../controllers/events/EventsController';
import { validateSchemas } from '../shared/middleware/validationMiddleware';
import { createUser } from '../shared/validation/users/userValidation';
import { createEvent } from '../shared/validation/events/eventValidation';
import validateJWT from '../shared/middleware/userIsAuthorized';


const router = Router();

router.get('/', (req, res) => {
    return res.status(StatusCodes.ACCEPTED).send('Teste!');
});

router.post('/api/v1/users/sign-in',usersController.signIn);
router.post('/api/v1/users/sign-up',validateSchemas(createUser), usersController.signUp);

router.post('/api/v1/events', validateJWT,validateSchemas(createEvent), eventsController.createEvent);
router.get('/api/v1/events/', validateJWT,eventsController.getEventsByDay);
router.get('/api/v1/events/:id', validateJWT,eventsController.getEventById);
router.delete('/api/v1/events/', validateJWT,eventsController.deleteEventByDay);
router.delete('/api/v1/events/:id', validateJWT,eventsController.deleteEventId);

export { router };