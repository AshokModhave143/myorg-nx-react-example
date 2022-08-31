import { render } from '@testing-library/react';

import App from './app';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a title as "Todos"', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Todos/gi)).toBeTruthy();
  });
});
