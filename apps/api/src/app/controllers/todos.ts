import { RequestHandler } from 'express';
import { Todo } from '../models/Todo';

export const all: RequestHandler = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).send(todos);
};

export const add: RequestHandler = async (req, res) => {
  const { title, description } = req.body;
  const todo = new Todo({
    title,
    description,
  });
  await todo.save();

  const todos = await Todo.find();

  res.status(200).send(todos);
};

export const deleteTodo: RequestHandler = async (req, res) => {
  await Todo.deleteOne({ _id: req.body.id });

  const todos = await Todo.find();

  res.status(200).send(todos);
};
