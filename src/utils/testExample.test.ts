import { testExampleFunction } from './testExample';

describe('testExampleFunction', () => {
  it('should return the sum of two numbers', () => {
    expect(testExampleFunction(1, 2)).toBe(3);
    expect(testExampleFunction(3, 4)).toBe(7);
  });
});
