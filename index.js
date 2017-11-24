'use strict'
const safeIgnoreList = require('./safeIgnoreList.json')
const unsafeIgnoreList = require('./unsafeIgnoreList.json')

const safeIgnorableFiles = new Set(safeIgnoreList)
const safeIgnorableDirs = new Set([
  '.vscode',
  '.github',
  '.idea',
  '.vscode',
  'coverage',
	'.nyc_output',
  '.circleci',
  'doc',
  'docs',
  'example',
  'examples',
  'test',
  'tests',
  '__tests__',
  'powered-test',
])
const unsafeIgnorableFiles = new Set(unsafeIgnoreList)
const unsafeIgnorableDirs = new Set([
  'website',
	'images',
  'assets',
])

module.exports = ignorable
module.exports.safe = safe

function ignorable (filename) {
  if (typeof filename !== 'string') {
    throw new TypeError(`Expected \`filename\` to be of type \`string\`, got \`${typeof filename}\``);
  }

  filename = filename.toLowerCase()
  const dir = _getRootDir(filename)

  if (_safe(filename, dir)) {
    return true
  }
  if (unsafeIgnorableFiles.has(filename)) {
    return true
  }

  if (!dir) return false

  return unsafeIgnorableDirs.has(dir)
}

function _getRootDir (filename) {
  let index = filename.indexOf('/')
  if (index !== -1) return filename.substr(0, index)
  index = filename.indexOf('\\')
  if (index !== -1) return filename.substr(0, index)
  return null
}

function safe (filename) {
  if (typeof filename !== 'string') {
    throw new TypeError(`Expected \`filename\` to be of type \`string\`, got \`${typeof filename}\``);
  }

  filename = filename.toLowerCase()
  const dir = _getRootDir(filename)
  return _safe(filename, dir)
}

function _safe (filename, dir) {
  return Boolean(safeIgnorableFiles.has(filename) || dir && safeIgnorableDirs.has(dir))
}
