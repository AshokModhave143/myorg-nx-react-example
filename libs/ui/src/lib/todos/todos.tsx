import styles from './todos.module.scss';
import { Todo } from '@myorg-nx-react-example/data';

/* eslint-disable-next-line */
export interface TodosProps {
  todos: Todo[];
}

export const TodosList = (props: TodosProps) => {
  return (
    <ul>
      {props.todos.map((item, index) => (
        <div key={`todo-item-${index}`}>
          <li className={index % 2 === 0 ? styles['oddRow'] : ''}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>

          <div className={styles['divider']} />
        </div>
      ))}
    </ul>
  );
};
