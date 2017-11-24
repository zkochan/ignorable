const ignorable = require('ignorable')

console.log(ignorable('readme.md'))

console.log(ignorable('test.js'))

console.log(ignorable.safe('test.js'))
