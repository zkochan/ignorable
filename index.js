'use strict'
const safeIgnoreList = require('./safeIgnoreList.json')
const unsafeIgnoreList = require('./unsafeIgnoreList.json')

const safeIgnorableFiles = new Set(safeIgnoreList)
const unsafeIgnorableFiles = new Set(unsafeIgnoreList)
const unsafeIgnorableDirs = new Set([
  'example',
  'examples',
  'test',
  'tests',
])

module.exports = ignorable
module.exports.safe = safe

function ignorable (filename) {
  filename = filename.toLowerCase()
  if (safe(filename)) {
    return true
  }
  if (unsafeIgnorableFiles.has(filename)) {
    return true
  }

  const dir = _getRootDir(filename)
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
  return safeIgnorableFiles.has(filename.toLowerCase())
}
