import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import {
  addTodo,
  getTodos,
  deleteTodo,
} from '@myorg-nx-react-example/todos/data-access';
import React, { useEffect, useState } from 'react';
import { AddTodo, TodoList } from '../../index';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TodosProps = {};

export const TodosComponent: React.FC<TodosProps> = (props: TodosProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleOnAdd = (todo: ITodo) => {
    addTodo(todo).then((data: ITodo) => setTodos([...todos, data]));
  };

  const handleDeleteToDo = (todo: ITodo) => {
    deleteTodo(todo).then((data: ITodo) => setTodos([...todos, data]));
  };

  return (
    <React.Fragment>
      <AddTodo onAdd={handleOnAdd} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteToDo} />
    </React.Fragment>
  );
};

export default TodosComponent;
