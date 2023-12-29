import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { usersController } from '../controllers/users/UsersController';
import { eventsController } from '../controllers/events/EventsController';

const router = Router();

router.get('/', (req, res) => {
    return res.status(StatusCodes.ACCEPTED).send('Teste!');
});

router.post('/users/sign-in', usersController.signIn);
router.post('/users/sign-up', usersController.signUp);

router.post('/events', eventsController.createEvent);
router.get('/events', eventsController.getAllEvents);
router.get('/events/:id', eventsController.getEventById);
router.delete('/events/:day', eventsController.deleteEventByDay);
router.delete('/events/:id', eventsController.deleteEventId);

export { router };