'use strict'

import test from 'ava'
import main from '../main/main.js'

test.before(t => {})
test.after(t => {})
test.beforeEach(t => {
  t.context.data = 5
})
test.afterEach(t => {})

test('a test', t => {
  t.is(t.context.data, 5)
  t.deepEqual([1, 2], [1, 2])
  t.truthy(main)
})

test(async t => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})

test.failing('demonstrate some bug', t => {
  t.fail()
})

test.skip('will not be run', t => {
  t.fail()
})

test.todo('will think about writing this later')
