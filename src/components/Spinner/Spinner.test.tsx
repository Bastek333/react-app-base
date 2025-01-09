import Spinner from './Spinner';
import { render } from '@testing-library/react';

describe('Spinner', () => {
  it('should render', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('spinner-container');
    expect(container.firstChild?.firstChild).toHaveClass('spinner');
  });
});
