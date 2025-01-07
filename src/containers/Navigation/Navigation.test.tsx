import Navigation from './Navigation';
import { BrowserRouter } from 'react-router';

import { screen, render } from '@testing-library/react';

describe('Test Navigation Container', () => {
  it('should render Navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).exist;
    expect(screen.getByText('Vite')).exist;
    expect(screen.getByText('React')).exist;
  });
});
