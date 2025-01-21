# eslint-plugin-object-css

![NPM Version](https://img.shields.io/npm/v/eslint-plugin-object-css?color=brightgreen)
![NPM License](https://img.shields.io/npm/l/eslint-plugin-object-css?color=yellow)

ESLint plugin for object CSS properties order and valid value verification

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-object-css`:

```sh
npm install eslint-plugin-object-css --save-dev
```

## Usage

Add object-css to the plugins section of your `.eslintrc` configuration file. You can oISC the eslint-plugin- prefix:

```json
{
  "plugins": ["object-css"]
}
```

## Recommended

As for the recommended rules, two rules will be enabled with a warning.

```json
  "extends": [
    "plugin:object-css/recommended"
  ],
```

## Rules

If you want to set security levels individually, set them in the rules.

```json
{
  "rules": {
    "object-css/recess-order": "warn",
    "object-css/valid-value": "error"
  }
}
```

## Supports eslint9

### eslint.config.mjs

```mjs
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import objectCss from 'eslint-plugin-object-css'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('plugin:object-css/recommended'),
  {
    files: ['**/*.{ts,js,jsx,tsx}'],
    plugins: {
      'object-css': objectCss,
    },
  },
]

export default eslintConfig
```
