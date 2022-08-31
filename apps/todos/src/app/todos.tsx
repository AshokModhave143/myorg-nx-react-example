import React, { useState } from 'react';
import { Todo } from '@myorg-nx-react-example/data';
import { TodosList, AddTodo } from '@myorg-nx-react-example/ui';

export type TodosProps = {
  todos: Array<Todo>;
  onAddTodo: (todo: Todo) => void;
  onDeleteTodo?: (todo: Todo) => void;
};

export const TodosComponent: React.FC<TodosProps> = (props: TodosProps) => {
  return (
    <div>
      <h1>Todos</h1>
      <AddTodo onAddTodo={props.onAddTodo} />
      <TodosList todos={props.todos} onDeleteTodo={props.onDeleteTodo} />
    </div>
  );
};
