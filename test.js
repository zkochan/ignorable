'use strict'
const path = require('path');
const test = require('tape')
const _ignorable = require('./index')

function ignorable (filename) {
  filename = filename.split('/').join(path.sep);
  return _ignorable(filename);
}
ignorable.safe = function (filename) {
  filename = filename.split('/').join(path.sep);
  return _ignorable.safe(filename);
}

test('ignorable()', t => {
  t.throws(() => ignorable(1), 'Expected `filename` to be of type `string`, got `number`')
  t.true(ignorable('README.md'))
  t.true(ignorable('readme.md'))
  t.true(ignorable('readme.markdown'))
  t.true(ignorable('example.js'))
  t.true(ignorable('test/index.js'))
  t.true(ignorable('example/index.js'))

  t.end()
})

test('ignorable.safe()', t => {
  t.throws(() => ignorable(1), 'Expected `filename` to be of type `string`, got `number`')
  t.true(ignorable.safe('README.md'))
  t.true(ignorable.safe('readme.md'))
  t.true(ignorable.safe('readme.markdown'))
  t.false(ignorable.safe('LICENSE'))
  t.false(ignorable.safe('LICENSE.txt'))
  t.false(ignorable.safe('website/index.html'))
  t.true(ignorable.safe('.github/ISSUE_TEMPLATE.md'))

  t.end()
})
