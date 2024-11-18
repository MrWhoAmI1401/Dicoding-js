import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function tests', async (t) => {
  // Test 1: Adding two positive numbers
  t.test('should return the sum of two positive numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
  });

  // Test 2: Adding a positive number and zero
  t.test('should return the sum when one number is zero', () => {
    assert.strictEqual(sum(5, 0), 5);
  });

  // Test 3: Adding two negative numbers
  t.test('should return 0 when one or both numbers are negative', () => {
    assert.strictEqual(sum(-1, 2), 0);
    assert.strictEqual(sum(1, -2), 0);
    assert.strictEqual(sum(-1, -2), 0);
  });

  // Test 4: Adding non-numeric values
  t.test('should return 0 if either argument is not a number', () => {
    assert.strictEqual(sum('a', 2), 0);
    assert.strictEqual(sum(1, 'b'), 0);
    assert.strictEqual(sum('a', 'b'), 0);
  });

  // Test 5: Adding two valid positive numbers
  t.test('should return correct sum when both numbers are valid', () => {
    assert.strictEqual(sum(10, 20), 30);
  });
});
