'use strict'
const test = require('tape')
const ignorable = require('.')

test('ignorable()', t => {
  t.true(ignorable('README.md'))
  t.true(ignorable('readme.md'))
  t.true(ignorable('readme.markdown'))
  t.true(ignorable('example.js'))
  t.true(ignorable('test/index.js'))
  t.true(ignorable('example/index.js'))
  t.true(ignorable('example\\index.js'))

  t.end()
})

test('ignorable.safe()', t => {
  t.true(ignorable.safe('README.md'))
  t.true(ignorable.safe('readme.md'))
  t.true(ignorable.safe('readme.markdown'))
  t.false(ignorable.safe('example.js'))
  t.false(ignorable.safe('test/index.js'))
  t.false(ignorable.safe('example/index.js'))
  t.false(ignorable.safe('example\\index.js'))
  t.true(ignorable.safe('.github/ISSUE_TEMPLATE.md'))

  t.end()
})
