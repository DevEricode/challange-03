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

router.post('/users/sign-in',usersController.signIn);
router.post('/users/sign-up',validateSchemas(createUser), usersController.signUp);

router.post('/events', validateJWT, validateSchemas(createEvent), eventsController.createEvent);
router.get('/events/:dayOfWeek', validateJWT, eventsController.getEventsByDay);
router.get('/events/:id', eventsController.getEventById);
router.delete('/events/:dayOfWeek', eventsController.deleteEventByDay);
router.delete('/events/:id', eventsController.deleteEventId);

export { router };