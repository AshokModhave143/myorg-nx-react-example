import { ITodo } from '@myorg-nx-react-example/todos-shared-models';
import { render, screen } from '@testing-library/react';

import TodoCard from './todo-card';

describe('TodoCard', () => {
  it('should render successfully', () => {
    const todo: ITodo = { id: 1, title: 'title', description: 'description' };
    const { baseElement } = render(<TodoCard todo={todo} itemIndex={0} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByText(todo.title)).toBeDefined();
  });
});
