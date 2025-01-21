import { Rule } from 'eslint'

declare const _default: {
  rules: {
    'recess-order': Rule.RuleModule
    'valid-value': Rule.RuleModule
  }
  configs: {
    recommended: {
      plugins: string[]
      rules: {
        'object-css/recess-order': string
        'object-css/valid-value': string
      }
    }
  }
}

export = _default
