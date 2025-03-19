'use strict'

const sortProperties = require('./rules/sort-properties.js')
const validateValues = require('./rules/validate-values.js')

const rules = {
  'sort-properties': sortProperties,
  'validate-values': validateValues,
}

const configs = {
  recommended: {
    plugins: ['zss-lint'],
    rules: {
      'zss-lint/sort-properties': 'warn',
      'zss-lint/validate-values': 'warn',
    },
  },
}

const flatConfigs = {
  recommended: {
    plugins: {
      'zss-lint': {
        rules,
      },
    },
    rules: {
      'zss-lint/sort-properties': 'warn',
      'zss-lint/validate-values': 'warn',
    },
  },
}

module.exports = {
  rules,
  configs,
  flatConfigs,
}
