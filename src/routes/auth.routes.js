import {Router} from 'express';
import { profile, signin, signout, signup } from '../controllers/auth.controllers.js';

const router = Router();



router.post('/signup', signup);

router.post('/signin', signin);

router.post('/signout', signout);

router.get('/profile', profile);

export default router;
