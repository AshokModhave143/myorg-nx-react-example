import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import styles from './todo-card.module.scss';

export interface TodoCardProps {
  todo: ITodo;
  itemIndex: number;
  onDeleteTodo?: (todo: ITodo) => void;
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
