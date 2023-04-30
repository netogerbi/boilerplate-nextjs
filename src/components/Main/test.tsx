import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: 'React Avançado' })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      background: '#06092b',
    });
  });
});
