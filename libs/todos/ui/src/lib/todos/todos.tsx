import styles from './todos.module.scss';
import TodoCard from '../todo-card/todo-card';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';

export interface TodosProps {
  todos: ITodo[];
  onDeleteTodo?: (todo: ITodo) => void;
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
