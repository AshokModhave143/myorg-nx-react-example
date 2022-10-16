import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import { render, screen } from '@testing-library/react';

import TodoCard from './todoCard';

describe('TodoCard', () => {
  it('should render successfully', () => {
    const todo: ITodo = { title: 'title', description: 'description' };
    const { baseElement } = render(
      <TodoCard todo={todo} onDeleteTodo={jest.fn()} />
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByText(todo.title)).toBeDefined();
  });
});
