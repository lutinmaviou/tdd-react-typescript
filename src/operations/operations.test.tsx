import operations from './operations';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('operations type', () => {
  test('should return 2 if numbers are 1 and 1', () => {
    expect(operations(1, 1, 'addition')).toBe(2);
  });

  test('should return 2 if numbers are 4 and 2', () => {
    expect(operations(4, 2, 'substraction')).toBe(2);
  });

  test('should return 6 if numbers are 2 and 3', () => {
    expect(operations(2, 3, 'multiplication')).toBe(6);
  });

  test('should return 3 if numbers are 12 and 4', () => {
    expect(operations(12, 4, 'division')).toBe(3);
  });
});

describe('button component', () => {
  test('should render button component with addition className', () => {
    render(<Button className="addition" value="" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('addition');
  });
});
