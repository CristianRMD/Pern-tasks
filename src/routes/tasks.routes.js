//import {Router} from 'express';
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/tasks.controllers.js';
const router = Router();
import Router from 'express-promise-router'
import { isAuth } from '../middlewares/auth.middleware.js';
import {validateSchema} from '../middlewares/validate.middleware.js'
import { createTaskSchema, UpdateSchema } from '../schemas/task.schema.js';
router.get('/tasks', isAuth,getAllTasks);

router.get('/tasks/:id',isAuth ,getTask);

router.post('/tasks', isAuth,validateSchema(createTaskSchema),createTask);

router.put('/tasks/:id', isAuth,validateSchema(UpdateSchema),updateTask);

router.delete('/tasks/:id',isAuth, deleteTask); 

export default router;
