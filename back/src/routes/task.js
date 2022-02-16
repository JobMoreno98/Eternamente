import { Router } from 'express';
import { getTasks, createTask } from '../controllers/task.js';


const router = new Router();


/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Routes Tasks
 */

/**
 * @swagger
 * /task:
 *  get:
 *     summary: obtiene las tareas
 *     tags: [Tasks]
 */
router.get('/task/:nombre', getTasks);
/**
 * @swagger
 * /task:
 *  post:
 *     summary: registra una tarea
 *     tags: [Tasks]
 */
router.post('/task', createTask)

export default router;