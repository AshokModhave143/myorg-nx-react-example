import { rest } from 'msw';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';

export const todos: ITodo[] = [
  {
    _id: 'kahdfn12',
    title: 'Office meeting',
    description: 'Discuss the product requirements',
  },
  {
    _id: 'xjbsijs',
    title: 'stand up meeting kjsbdbfihb',
    description: 'Team catch up for project status',
  },
];

export const todoHandlers = [
  rest.get('/api/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
  rest.post('/api/addTodo', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
