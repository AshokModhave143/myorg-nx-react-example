import { model, Model, Schema } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description: string;
}

type ITodoModel = Model<ITodo>;

const schema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
});

export const Todo: ITodoModel = model<ITodo, ITodoModel>('Todo', schema);
