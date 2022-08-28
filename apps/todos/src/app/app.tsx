// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import { TodosComponent } from './todos';
import { Todo } from '@myorg-nx-react-example/data';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const handleAddTodo = (todo: Todo) => {
    fetch('/api/addTodo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    })
      .then((_) => _.json())
      .then((data) => setTodos([...todos, data]));
  };

  return <TodosComponent todos={todos} onAddTodo={handleAddTodo} />;
}

export default App;
