# eslint-plugin-stylefix

![NPM Version](https://img.shields.io/npm/v/eslint-plugin-stylefix?color=brightgreen)
![NPM License](https://img.shields.io/npm/l/eslint-plugin-stylefix?color=yellow)

ESlint plugin for style fixing and error detection.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next install `eslint-plugin-stylefix`:

```sh
npm i --save-dev eslint-plugin-stylefix
```

## Usage

Add stylefix to the plugins section of your `.eslintrc` configuration file. You can omit the eslint-plugin- prefix:

```json
{
  "plugins": ["stylefix"]
}
```

## Recommended

As for the recommended rules two rules will be enabled with the sort-properties and validate-values is "warn".

```json
  "extends": [
    "plugin:stylefix/recommended"
  ]
```

## Rules

If you want to set security levels individually set them in the rules.

```json
{
  "rules": {
    "stylefix/sort-properties": "warn",
    "stylefix/validate-values": "warn"
  }
}
```

※ If you use typescript you will need a suitable parser like `typescript-eslint`.  
And if you are using eslint v8 and lower set `"eslint.useESLintClass": true` in vscode's setting.json.

## Supports ESLint v9 and higher

```sh
npm install @eslint/js typescript-eslint --save-dev
```

If you are using eslint 9 or higher `do not use` this `useESLintClass`.

### Usage (Flat Config `eslint.config.mjs`)

The following file is a configuration file that contains recommended settings for TypeScript and eslint.

```js
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylefixlint from 'eslint-plugin-stylefix'

const eslintConfig = tseslint.config(
  eslint.configs.recommended
  ...tseslint.configs.strict
  stylefixlint.flatConfigs.recommended
  {
    files: ['**/*.{ts,tsx}']
  }
)

export default eslintConfig
```

## Rule Description

### sort-properties

Automatically sorts CSS properties using the predefined recess order for consistent, maintainable styles and standardized grouping that improves readability and collaboration.

### validate-values

These are not validated as they have names with unique identifiers.  
Validation includes other standard properties.

- animationName
- counterIncrement
- counterReset
- counterSet
- font
- fontFamily
- gridArea
- gridColumn
- gridColumnEn
- gridColumnStart
- gridRow
- gridRowEnd
- gridRowStart
- listStyleType
- listStyle
- transitionProperty
- transition
- viewTransitionName
- willChange

## License

MIT.
