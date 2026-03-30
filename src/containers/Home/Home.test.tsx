import { screen, render } from '@testing-library/react';
import Home from './Home';

describe('Home container test', () => {
  it('should render Home heading', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Home');
  });
});
