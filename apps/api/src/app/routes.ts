import { Router } from 'express';

import * as ToDoController from './controllers/todos';

export const router = Router();

// Default routes

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

// Todo routes

router.get('/todos/all', ToDoController.all);
router.post('/todos/add', ToDoController.add);
router.delete('/todos/delete', ToDoController.deleteTodo);
