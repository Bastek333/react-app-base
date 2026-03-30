import { screen, render } from '@testing-library/react';
import Vite from './Vite';

describe('React container test', () => {
  it('should render React link', () => {
    render(<Vite />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Vite logo');
  });
});
