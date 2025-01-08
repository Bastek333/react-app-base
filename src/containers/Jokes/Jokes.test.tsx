import { screen, render } from '@testing-library/react';
import Jokes from './Jokes.tsx';

describe('Jokes container test', () => {
  it('should render Jokes page', () => {
    render(<Jokes />);

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Joke');
  });
});
