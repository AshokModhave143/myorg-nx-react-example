import { Express } from 'express';

interface Todo {
  id: number;
  title: string;
  description: string;
}
const todos: Todo[] = [
  {
    id: 1,
    title: 'Office meeting',
    description: 'Discuss the product requirements',
  },
  {
    id: 2,
    title: 'stand up meeting',
    description: 'Team catch up for project status',
  },
];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => {
    resp.send(todos);
  });

  app.post('/api/addTodo', (req, resp) => {
    const newTodo = { id: Math.floor(Math.random() * 100 + 1), ...req.body };
    resp.send(newTodo);
  });
}
