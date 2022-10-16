import styles from './todos.module.scss';
import TodoCard from '../todo-card/todoCard';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import { Container, List, ListItem } from '@mui/material';

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
    <Container>
      <List disablePadding sx={{ width: '100%', maxWidth: 360 }}>
        {props.todos.map((item, index) => (
          <ListItem
            key={item._id}
            disablePadding
            disableGutters
            sx={{ mx: 0, gap: 2 }}
          >
            <TodoCard todo={item} onDeleteTodo={props.onDeleteTodo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
