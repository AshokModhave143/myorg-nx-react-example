import React from 'react';
import { TodosList } from '@myorg-nx-react-example/todos-ui';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TodoListProps {
  todos: ITodo[];
  onDeleteTodo: (todo: ITodo) => void;
}

export function TodoList(props: TodoListProps) {
  return <TodosList todos={props.todos} onDeleteTodo={props.onDeleteTodo} />;
}

export default TodoList;
