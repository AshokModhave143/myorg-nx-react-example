import { Todo } from '@myorg-nx-react-example/data';
import styles from './todo-card.module.scss';

export interface TodoCardProps {
  todo: Todo;
  itemIndex: number;
  onDeleteTodo?: (todo: Todo) => void;
}

export function TodoCard(props: TodoCardProps) {
  const { todo, itemIndex, onDeleteTodo } = props;
  const oddStyle = itemIndex % 2 === 0 ? styles['oddRow'] : '';
  return (
    <div className={`${styles['container']} ${oddStyle}`}>
      <div className={styles['title']}>
        <h4>{todo.title}</h4>
        <span
          className={styles['closeBtn']}
          onClick={() => onDeleteTodo && onDeleteTodo(todo)}
        >
          {' '}
          X{' '}
        </span>
      </div>
      <p>{todo.description}</p>
    </div>
  );
}

export default TodoCard;
