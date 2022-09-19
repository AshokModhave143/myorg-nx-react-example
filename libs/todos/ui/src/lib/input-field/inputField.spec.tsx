import { render } from '@testing-library/react';

import { InputField } from './inputField';

describe('AddTodo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputField variant="outlined" />);
    expect(baseElement).toBeTruthy();
  });
});
