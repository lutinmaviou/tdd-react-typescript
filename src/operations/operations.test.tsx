import addition from './addition/addition';

test('should return 2 if numbers are 1 and 1', () => {
  expect(addition(1, 1)).toBe(2);
});

test('should return 120 if numbers are 50 and 70', () => {
  expect(addition(50, 70)).toBe(120);
});
