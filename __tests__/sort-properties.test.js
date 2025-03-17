const { RuleTester } = require('eslint')
const rule = require('../lib/rules/sort-properties')

const ruleTester = new RuleTester()

ruleTester.run('sort-properties', rule, {
  valid: [
    {
      code: 'const styles = { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", display: "block" };',
      settings: {
        ecmaVersion: 2021,
      },
    },
  ],
  invalid: [
    {
      code: 'const styles = { display: "block", position: "absolute", top: "0", right: "0", bottom: "0", left: "0" };',
      errors: [
        {
          message: 'Property "display" is out of order. Expected position: 6.',
        },
        {
          message: 'Property "position" is out of order. Expected position: 1.',
        },
        {
          message: 'Property "top" is out of order. Expected position: 2.',
        },
        {
          message: 'Property "right" is out of order. Expected position: 3.',
        },
        {
          message: 'Property "bottom" is out of order. Expected position: 4.',
        },
        {
          message: 'Property "left" is out of order. Expected position: 5.',
        },
      ],
      output:
        'const styles = { position: "absolute", top: "0", right: "0", bottom: "0", left: "0", display: "block" };',
      settings: {
        ecmaVersion: 2021,
      },
    },
  ],
})
