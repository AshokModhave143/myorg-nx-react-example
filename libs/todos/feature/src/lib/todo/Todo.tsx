import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import {
  addTodo,
  getTodos,
  deleteTodo,
} from '@myorg-nx-react-example/todos/data-access';
import React, { useEffect, useState } from 'react';
import { TodosList } from '@myorg-nx-react-example/todos-ui';
import { AddTodo } from '../../index';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TodosProps = {};

export const TodosComponent: React.FC<TodosProps> = (props: TodosProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    handleFetchTodo();
  }, []);

  const handleFetchTodo = () => getTodos().then(setTodos);

  const handleOnAdd = (todo: ITodo) => {
    addTodo(todo).then(handleFetchTodo);
  };

  const handleDeleteToDo = (todo: ITodo) => {
    deleteTodo(todo).then(handleFetchTodo);
  };

  return (
    <React.Fragment>
      <AddTodo onAdd={handleOnAdd} />
      <TodosList todos={todos} onDeleteTodo={handleDeleteToDo} />
    </React.Fragment>
  );
};

export default TodosComponent;
