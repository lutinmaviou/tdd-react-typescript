import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('Should render with class "equals" and value "="', () => {
    render(<Button className="equals" value="-" title="" />);
  });
});

describe('button element', () => {
  test('should render with className "addition"', () => {
    render(<Button className="addition" value="" title="" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('addition');
  });
});

describe('handles onClick', () => {
  test('return something', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} title="addition" className="signs" value="+" />);
    const buttonElt = screen.getByRole('button');
    fireEvent.click(buttonElt);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
