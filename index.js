module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "airbnb-base"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-console": 1,
    "max-len": [2, 120],
    "semi": [2, "never"],
    "comma-dangle": [2, "never"],
    "no-underscore-dangle": 0,
    "quotes": [2, "double"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "prefer-object-spread": 2,
    "no-param-reassign": [2, { "props": false }],
    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [2, "always"],
    "no-shadow": 0,
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
    ],
    "import/prefer-default-export": 0
  }
}
