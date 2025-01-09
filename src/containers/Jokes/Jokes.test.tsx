import { screen, render, act  } from '@testing-library/react';
import Jokes from './Jokes.tsx';

describe('Jokes container test', () => {
  it('should render Jokes page', async () => {
    render(<Jokes />);

    await act(() => screen.findByTestId('spinner'));

    // TO DO - to test components with API calls mocking the API call is required - https://testing-library.com/docs/react-testing-library/example-intro#full-example

    //await screen.findByText('Joke');
    //expect(await act(() => screen.findByText('Joke').toBeInTheDocument());

    /* await waitFor(() => expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Joke')
    ) */
});
});
