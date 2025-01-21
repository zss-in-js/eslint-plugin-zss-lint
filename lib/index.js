'use strict'

const recessOrder = require('./rules/recess-order')
const validValue = require('./rules/valid-value')

module.exports = {
  rules: {
    'recess-order': recessOrder,
    'valid-value': validValue,
  },
  configs: {
    recommended: {
      plugins: ['object-css'],
      rules: {
        'object-css/recess-order': 'warn',
        'object-css/valid-value': 'warn',
      },
    },
  },
}
