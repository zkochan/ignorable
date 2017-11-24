'use strict'
const markdownExtensions = require('markdown-extensions')
const writeJsonFile = require('write-json-file')

const safeIgnoreList = [
  // CI
  '.travis.yml',
  '.appveyor.yml',
  'circle.yml',
  '.coveralls.yml',
  'wercker.yml',

  // Editors
  '.editorconfig',

  // Git
  '.gitignore',
  '.gitattributes',
  '.gitmodules',
  '.gitkeep',
  '.keep',

  // Package managers
  '.npmrc',
  '.npmignore',
  'npm-shrinkwrap.json',
  'package-lock.json',
  'shrinkwrap.yaml',
  'pnpmfile.js',
  'yarn.lock',
  '.yarnrc',
  '.yarn-metadata.json',
  '.yarn-integrity',
  '.yarnclean',
  'bower.json',
  '.bowerrc',
  'npm-debug.log',

  // Linters
  '.eslintrc',
  '.eslintrc.js',
  '.eslintingnore',
  '.jshintrc',
  'tslint.json',

  // Compilers
  'tsconfig.json',
  '.babelrc',

  // RC files
  '.flowconfig',
  '.documentup.json',
  '.istanbul.yml',
  'mocha.opts',

  'gulpfile.js',
  'gruntfile.js',
  'makefile',
  '.ds_store',
  '.tern-project',
  'changes',
  'authors',
  'contributors'
]
.concat([
  'readme',
  'changelog',
  'history',
  'contributing',
  'code_of_conduct',
  'issue_template',
  'pull_request_template',
  'authors',
  'changes',
  'contributors',
].reduce((acc, filename) => acc.concat(withAllMarkdownExtensions(filename)), []))

function withAllMarkdownExtensions (filename) {
  return markdownExtensions.map(markdownExtension => `${filename}.${markdownExtension}`)
}

writeJsonFile.sync('safeIgnoreList.json', safeIgnoreList.sort(), {indent: 2})

const unsafeIgnoreList = [
  // Docs
  'license',
  'license.txt',
  'licence',
  'licence.txt',
  'license-mit',
  'license.mit',
  'license-bsd',
  'license.bsd',

  'example.js',
  'test.js',
]
.concat([
  'license',
  'licence',
].reduce((acc, filename) => acc.concat(withAllMarkdownExtensions(filename)), []))

writeJsonFile.sync('unsafeIgnoreList.json', unsafeIgnoreList.sort(), {indent: 2})
