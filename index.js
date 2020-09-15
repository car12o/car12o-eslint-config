const { rules, ...airbnbBase } = require('eslint-config-airbnb-base')

module.exports = {
  ...airbnbBase,
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    ...rules,
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true, "caughtErrors": "all" }],
    "no-console": "warn",
    "max-len": ["error", 120],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-underscore-dangle": "off",
    "quotes": ["error", "double"],
    "indent": ["error", "error", { "SwitchCase": 1 }],
    "prefer-object-spread": "error",
    "no-param-reassign": ["error", { "props": false }],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "functions" }],
    "no-return-await": "error",
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "consistent": true
        },
        "ObjectPattern": {
          "consistent": true
        },
        "ImportDeclaration": {
          "consistent": true
        },
        "ExportDeclaration": {
          "consistent": true
        }
      }
    ]
  }
}
