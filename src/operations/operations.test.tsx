import addition from './addition';
import substraction from './substraction';

test('should return 2 if numbers are 1 and 1', () => {
  expect(addition(1, 1)).toBe(2);
});

test('should return 120 if numbers are 50 and 70', () => {
  expect(addition(50, 70)).toBe(120);
});

test('should return 2 if numbers are 4 and 2', () => {
  expect(substraction(4, 2)).toBe(2);
});
