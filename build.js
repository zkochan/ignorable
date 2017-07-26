'use strict'
const markdownExtensions = require('markdown-extensions')
const writeJsonFile = require('write-json-file')

const markdownFileNames = [
  'readme',
  'changelog',
  'history',
  'contributing',
  'code_of_conduct',
]

const safeIgnoreList = [
  '.travis.yml',
  '.appveyor.yml',

  '.editorconfig',

  'license',
  'licence',

  '.gitignore',
  '.gitattributes',

  '.npmrc',
  '.npmignore',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'shrinkwrap.yaml',

  'yarn.lock',

  '.eslintrc',
  '.eslintingnore',
]

for (const markdownFileName of markdownFileNames) {
  for (const markdownExtension of markdownExtensions) {
    safeIgnoreList.push(`${markdownFileName}.${markdownExtension}`)
  }
}

writeJsonFile.sync('safeIgnoreList.json', safeIgnoreList, {indent: 2})

const unsafeIgnoreList = [
  'example.js',
  'test.js',
  'gulpfile.js',
]

writeJsonFile.sync('unsafeIgnoreList.json', unsafeIgnoreList, {indent: 2})
