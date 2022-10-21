import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button component', () => {
  test('Should render with class "equals" and value "="', () => {
    render(<Button className="equals" value="-" />);
  });
});

describe('button element', () => {
  test('should render with className "addition"', () => {
    render(<Button className="addition" value="" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('addition');
  });
});
