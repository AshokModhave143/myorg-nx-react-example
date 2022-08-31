import styles from './todos.module.scss';
import { Todo } from '@myorg-nx-react-example/data';
import TodoCard from '../todo-card/todo-card';

export interface TodosProps {
  todos: Todo[];
  onDeleteTodo?: (todo: Todo) => void;
}

export const TodosList = (props: TodosProps) => {
  if (!props.todos.length) {
    return (
      <div className={styles['noitems']}>No TODO today. Add it quickly.</div>
    );
  }
  return (
    <ul>
      {props.todos.map((item, index) => (
        <li>
          <TodoCard
            todo={item}
            itemIndex={index}
            onDeleteTodo={props.onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};
