import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum of 2 and 3 should return 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum of -1 and 1 should return 0', () => {
  assert.strictEqual(sum(-1, 1), 0);
});

test('sum of 0 and 0 should return 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});
