import { NoteAddRounded } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';

export interface TodoCardProps {
  todo: ITodo;
  onDeleteTodo?: (todo: ITodo) => void;
}

export function TodoCard({ todo, onDeleteTodo }: TodoCardProps) {
  return (
    <ListItem sx={{ background: 'white', border: '1px solid lightgray' }}>
      <ListItemAvatar>
        <Avatar>
          <NoteAddRounded />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={todo.title} secondary={todo.description} />
      <ListItemButton onClick={() => onDeleteTodo && onDeleteTodo(todo)}>
        X
      </ListItemButton>
    </ListItem>
  );
}

export default TodoCard;
