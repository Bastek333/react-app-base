import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';

import App from './App';

describe('App tests', () => {
  it('should render the title', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Vite - React + React Router');
  });
});
