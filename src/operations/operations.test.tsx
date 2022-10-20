//import addition from './addition';
//import substraction from './substraction';
import operations from './operations';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import Button from '../components/Button/Button';
//import {expect, jest, test} from '@jest/globals';

test('should return 2 if numbers are 1 and 1', () => {
  expect(operations(1, 1, 'addition')).toBe(2);
});

test('should return 2 if numbers are 4 and 2', () => {
  expect(operations(4, 2, 'substraction')).toBe(2);
});