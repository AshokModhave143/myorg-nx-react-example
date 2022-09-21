import styles from './todos.module.scss';
import TodoCard from '../todo-card/todo-card';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import { Box, Divider, List, ListItem } from '@mui/material';

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
    <Box>
      <List disablePadding sx={{ width: '100%', maxWidth: 360 }}>
        {props.todos.map((item, index) => (
          <>
            <ListItem key={item.id} disablePadding>
              <TodoCard todo={item} onDeleteTodo={props.onDeleteTodo} />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </>
        ))}
      </List>
    </Box>
  );
};
