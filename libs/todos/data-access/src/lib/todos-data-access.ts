import { ITodo } from '@myorg-nx-react-example/todos-shared-models';

export function todosDataAccess(): string {
  return 'todos-data-access';
}

export async function getTodos() {
  const response = await fetch('/api/todos/all');
  return response.json();
}

export async function addTodo(todo: ITodo) {
  const response = await fetch('/api/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  return response.json();
}

export async function deleteTodo(todo: ITodo) {
  const response = await fetch('/api/todos/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: todo._id,
    }),
  });

  return response.json();
}
