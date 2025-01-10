# eslint-plugin-css-camel-sort

![NPM Version](https://img.shields.io/npm/v/eslint-plugin-object-css?color=brightgreen)
![NPM License](https://img.shields.io/npm/l/eslint-plugin-object-css?color=yellow)

ESLint plugin for Object CSS properties order and valid value verification

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
