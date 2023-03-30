'use strict';

const baz = require('..');
const assert = require('assert').strict;

assert.strictEqual(baz(), 'Hello from baz');
console.info('baz tests passed');
