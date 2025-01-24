import { ESLint, Linter, Rule } from 'eslint'

declare const plugin: ESLint.Plugin & {
  meta: {
    name: string
    version: string
  }
  rules: {
    'recess-order': Rule.RuleModule
    'valid-value': Rule.RuleModule
  }
  configs: {
    recommended: Linter.LegacyConfig
  }
  flatConfigs: {
    recommended: Linter.Config<Linter.RulesRecord>
  }
}

export = plugin
