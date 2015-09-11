# eslint-plugin-no-arrow-labels

An ESLint rule to disallow label statements inside arrow function bodies.

Helps avoid the common error of omitting parens when returning object literals from arrow functions using the concise syntax. E.g., `params => { object: literal }`

See [MDN's notes on returning object literals from arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Returning_object_literals)

Note: You should probably just [disallow labeled statements everywhere](http://eslint.org/docs/rules/no-labels.html).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-arrow-labels`:

```
$ npm install eslint-plugin-no-arrow-labels --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-arrow-labels` globally.

## Usage

Add `no-arrow-labels` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-arrow-labels"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-arrow-labels": 2
    }
}
```
