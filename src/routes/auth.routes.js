import Router from 'express-promise-router';
import { profile, signin, signout, signup } from '../controllers/auth.controllers.js';
import { isAuth } from '../middlewares/auth.middleware.js';

const router = Router();



router.post('/signup', signup);

router.post('/signin', signin);

router.post('/signout', signout);

router.get('/profile', isAuth,profile);

export default router;
