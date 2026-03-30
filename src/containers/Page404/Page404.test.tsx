import { screen, render } from '@testing-library/react';
import Page404 from './Page404';

describe('Page404 container test', () => {
  it('should render Page404 heading', () => {
    render(<Page404 />);

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('404 - Page Not Found');
  });
});
