import { screen, render } from '@testing-library/react';
import React from './React';

describe('React container test', () => {
  it('should render React link', () => {
    render(<React />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'React logo');
  });
});
