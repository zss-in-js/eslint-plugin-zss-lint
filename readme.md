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

As for the recommended rules, two rules will be enabled with the recess-order is "warn", valid-value is "error".

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

※ If you use typescript you will need a suitable parser like typescript-eslint.  
If you are using eslint v8 and below, set `"eslint.useESLintClass": true` in vscode's setting.json.

## Supports ESLint v9 and above

```sh
npm install @eslint/js typescript-eslint --save-dev
```

If you are using eslint 9 or higher, do not use this `useESLintClass`.

### eslint.config.mjs

The following file is a configuration file that contains recommended settings for TypeScript and eslint.

```js
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import objectCss from 'eslint-plugin-object-css'

const eslintConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  objectCss.flatConfigs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
)

export default eslintConfig
```
