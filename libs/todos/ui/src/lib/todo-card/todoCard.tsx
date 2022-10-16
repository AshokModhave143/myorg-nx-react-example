import { DeleteOutline } from '@mui/icons-material';
import {
  CardContent,
  CardHeader,
  Card,
  Typography,
  CardActions,
  Button,
  Theme,
} from '@mui/material';
import { ITodo } from '@myorg-nx-react-example/todos-shared-models';

export interface TodoCardProps {
  todo: ITodo;
  onDeleteTodo?: (todo: ITodo) => void;
}

export function TodoCard({ todo, onDeleteTodo }: TodoCardProps) {
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        title={todo.title}
        titleTypographyProps={{ variant: 'body1' }}
        subheader={null}
        sx={(theme: Theme) => ({
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        })}
      ></CardHeader>
      <CardContent>
        <Typography variant="body2">{todo.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => onDeleteTodo && onDeleteTodo(todo)}
          endIcon={<DeleteOutline />}
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoCard;
