'use strict';

const sortProperties = require('./rules/sort-properties.js');
const validateValues = require('./rules/validate-values.js');
const noUnusedKeys = require('./rules/no-unused-keys.js');

const rules = {
  'sort-properties': sortProperties,
  'validate-values': validateValues,
  'no-unused-keys': noUnusedKeys,
};

const configs = {
  recommended: {
    plugins: ['zss-lint'],
    rules: {
      'zss-lint/sort-properties': 'warn',
      'zss-lint/validate-values': 'warn',
      'zss-lint/no-unused-keys': 'warn',
    },
  },
};

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
      'zss-lint/no-unused-keys': 'warn',
    },
  },
};

module.exports = {
  rules,
  configs,
  flatConfigs,
};
