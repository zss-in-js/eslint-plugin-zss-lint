'use strict'

const sortProperties = require('./rules/sort-properties.js')
const validateValues = require('./rules/validation-value.js')

const rules = {
  'sort-properties': sortProperties,
  'validate-values': validateValues,
}

const configs = {
  recommended: {
    plugins: ['stylefix'],
    rules: {
      'stylefix/sort-properties': 'warn',
      'stylefix/validate-values': 'warn',
    },
  },
}

const flatConfigs = {
  recommended: {
    plugins: {
      ['stylefix']: {
        rules,
      },
    },
    rules: {
      'stylefix/sort-properties': 'warn',
      'stylefix/validate-values': 'warn',
    },
  },
}

module.exports = {
  rules,
  configs,
  flatConfigs,
}
