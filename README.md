# ignorable

[![Greenkeeper badge](https://badges.greenkeeper.io/zkochan/ignorable.svg)](https://greenkeeper.io/)

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
```
<!--/@-->

## API

### `ignorable(filename)`

### `ignorable.safe(filename)`

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
