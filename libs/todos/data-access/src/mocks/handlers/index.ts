import { rest } from 'msw';
import { todos } from '../responses/todos';

export const todoHandlers = [
  rest.get('/api/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
  rest.post('/api/addTodo', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
