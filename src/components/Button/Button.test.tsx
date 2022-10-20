import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button component', () => {
  test('Should render component with class equals and value =', () => {
    render(<Button className="equals" value="-" />);
  });
});
