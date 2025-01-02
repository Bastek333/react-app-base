import TestButtonComponent from './TestButtonComponent';
import { screen, render } from '@testing-library/react';

describe('TestButtonComponent', () => {
  it('should render the title', () => {
    render(<TestButtonComponent title="Test Button" />);

    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });
});
