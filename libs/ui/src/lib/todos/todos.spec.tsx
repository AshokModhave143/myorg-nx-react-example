import { Todo } from '@myorg-nx-react-example/data';
import { render } from '@testing-library/react';

import { TodosList } from './todos';

describe('Todos', () => {
  it('should render successfully', () => {
    const todos: Todo[] = [
      { id: 1, title: 'title', description: 'description' },
    ];
    const { baseElement } = render(<TodosList todos={todos} />);
    expect(baseElement).toBeTruthy();
  });
});
