'use strict'

const recessOrder = require('./rules/recess-order.js')
const validValue = require('./rules/valid-value.js')

// define rules
const rules = {
  'recess-order': recessOrder,
  'valid-value': validValue,
}

const configs = {
  recommended: {
    plugins: ['object-css'],
    rules: {
      'object-css/recess-order': 'warn',
      'object-css/valid-value': 'error',
    },
  },
}

const flatConfigs = {
  recommended: {
    plugins: {
      'object-css': {
        rules,
      },
    },
    rules: {
      'object-css/recess-order': 'warn',
      'object-css/valid-value': 'error',
    },
  },
}

module.exports = {
  rules,
  configs,
  flatConfigs,
}
