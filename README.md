# ignorable

> Detects whether a file in a package can be ignored

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/ignorable.svg)](https://www.npmjs.com/package/ignorable) [![Build Status](https://img.shields.io/travis/zkochan/ignorable/master.svg)](https://travis-ci.org/zkochan/ignorable)
<!--/@-->

## Installation

```sh
npm i -S ignorable
```

## Usage

<!--@example('./example.js')-->
```js
const ignorable = require('ignorable')

console.log(ignorable('readme.md'))
//> true

console.log(ignorable('test.js'))
//> true

console.log(ignorable.safe('test.js'))
//> false
```
<!--/@-->

## API

### `ignorable(filename)`

Returns whether `true` if the file does not influence the functionality of the package.

### `ignorable.safe(filename)`

Safer than `ignorable()`. Does not return `true` for example files, test files, license files
and other resources that might be dangerous to remove.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
