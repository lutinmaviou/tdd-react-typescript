import operations from './operations';

describe('operations type', () => {
  test('should return 2 if numbers are 1 and 1, and type is "addition"', () => {
    expect(operations(1, 1, 'addition')).toBe(2);
  });

  test('should return 2 if numbers are 4 and 2, and type is "substraction"', () => {
    expect(operations(4, 2, 'substraction')).toBe(2);
  });

  test('should return 6 if numbers are 2 and 3, and type is "multiplication"', () => {
    expect(operations(2, 3, 'multiplication')).toBe(6);
  });

  test('should return 3 if numbers are 12 and 4, and type is "division"', () => {
    expect(operations(12, 4, 'division')).toBe(3);
  });
});
