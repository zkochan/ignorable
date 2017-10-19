'use strict'
const markdownExtensions = require('markdown-extensions')
const writeJsonFile = require('write-json-file')

const markdownFileNames = [
  'readme',
  'changelog',
  'history',
  'contributing',
  'code_of_conduct',
  'issue_template',
  'pull_request_template',
]

const safeIgnoreList = [
  // CI
  '.travis.yml',
  '.appveyor.yml',

  // Editors
  '.editorconfig',

  // Docs
  'license',
  'license.txt',
  'licence',
  'licence.txt',

  // Git
  '.gitignore',
  '.gitattributes',

  // Package managers
  '.npmrc',
  '.npmignore',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'shrinkwrap.yaml',
  'yarn.lock',
  '.yarnrc',

  // Linters
  '.eslintrc',
  '.eslintingnore',
  '.jshintrc',
  'tslint.json',

  // Compilers
  'tsconfig.json',
  '.babelrc',
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
