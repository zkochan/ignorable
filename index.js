'use strict'
const Minimatch = require('minimatch').Minimatch
const fs = require('fs')
const path = require('path')

const safeIgnoreRules = _ignoreFileToRules('./safeIgnore')
const unsafeIgnoreRules = _ignoreFileToRules('./unsafeIgnore')

module.exports = ignorable
module.exports.safe = safe

function ignorable (filename) {
  if (safe(filename)) {
    return true
  }

  return !_keep(unsafeIgnoreRules, filename)
}

function safe (filename) {
  if (typeof filename !== 'string') {
    throw new TypeError(`Expected \`filename\` to be of type \`string\`, got \`${typeof filename}\``)
  }

  return !_keep(safeIgnoreRules, filename)
}

function _keep (rules, filename) {
  if (filename[0] !== path.sep) {
    filename = path.sep + filename
  }

  let keep = true
  rules.forEach(function(rule) {
    if (rule.comment || rule.empty) {
      return
    }
    if (rule.negate === keep) {
      return
    }

    const match = rule.match(filename)
    if (!match) {
      return
    }

    keep = rule.negate
  })


  return keep
}

function _ignoreFileToRules (filename) {
  const contents = fs.readFileSync(filename, 'utf8')
  const lines = contents.split(/\r?\n/)
  const rules = lines.map(_ignoreLineToMinimatch)
  return rules
}

function _ignoreLineToMinimatch (line) {
  const opts = {
    matchBase: true,
    dot: true,
    flipNegate: true,
    nocase: true
  }

  return new Minimatch(line, opts)
}
