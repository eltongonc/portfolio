// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  //   extends: ["eslint:recommended", "plugin:vue/strongly-recommended"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // Required to lint *.vue files
  plugins: ["html"],
  settings: {
    "html/html-extensions": [".html", ".vue"] // consider .html and .we files as HTML
  },
  // Add your custom rules here
  rules: {
    // "no-var": "error",
    // "comma-dangle": "error",
    // "comma-spacing": "error",
    // "id-blacklist": "error",
    // "no-trailing-spaces": "error",
    // "no-console": "off"
  }
};

// Module.exports = {

// "parserOptions": {
//     "sourceType": "module"
// },
// "plugins": [ "html" ],
// "rules": {
//     "accessor-pairs": [
//         "error",
//         {
//             "getWithoutSet": false,
//             "setWithoutGet": false
//         }
//     ],
//     "array-bracket-newline": "off",
//     "array-bracket-spacing": "off",
//     "array-callback-return": "error",
//     "array-element-newline": "off",
//     "arrow-body-style": "error",
//     "arrow-parens": [
//         "error",
//         "always"
//     ],
//     "arrow-spacing": "off",
//     "block-scoped-var": "off",
//     "block-spacing": "off",
//     "brace-style": "off",
//     "callback-return": "off",
//     "camelcase": "off",
//     "capitalized-comments": "off",
//     "class-methods-use-this": "error",
//     "comma-dangle": "off",
//     "comma-spacing": "off",
//     "comma-style": "off",
//     "complexity": "off",
//     "computed-property-spacing": "off",
//     "consistent-return": "off",
//     "consistent-this": "off",
//     "curly": "off",
//     "default-case": "off",
//     "dot-location": [
//         "error",
//         "property"
//     ],
//     "dot-notation": "off",
//     "eol-last": "off",
//     "eqeqeq": "off",
//     "for-direction": "error",
//     "func-call-spacing": "off",
//     "func-name-matching": "off",
//     "func-names": "off",
//     "func-style": "off",
//     "function-paren-newline": "off",
//     "generator-star-spacing": "error",
//     "getter-return": "error",
//     "global-require": "error",
//     "guard-for-in": "off",
//     "handle-callback-err": "off",
//     "id-blacklist": "error",
//     "id-length": "off",
//     "id-match": "error",
//     "implicit-arrow-linebreak": [
//         "error",
//         "beside"
//     ],
//     "indent": "off",
//     "indent-legacy": "off",
//     "init-declarations": "off",
//     "jsx-quotes": "error",
//     "key-spacing": "off",
//     "keyword-spacing": "off",
//     "line-comment-position": "off",
//     "linebreak-style": "off",
//     "lines-around-comment": "off",
//     "lines-around-directive": "off",
//     "lines-between-class-members": "error",
//     "max-depth": "off",
//     "max-len": "off",
//     "max-lines": "off",
//     "max-nested-callbacks": "error",
//     "max-params": "off",
//     "max-statements": "off",
//     "max-statements-per-line": "off",
//     "multiline-comment-style": "off",
//     "multiline-ternary": "off",
//     "new-parens": "off",
//     "newline-after-var": "off",
//     "newline-before-return": "off",
//     "newline-per-chained-call": "off",
//     "no-alert": "error",
//     "no-array-constructor": "off",
//     "no-await-in-loop": "error",
//     "no-bitwise": "off",
//     "no-buffer-constructor": "error",
//     "no-caller": "error",
//     "no-catch-shadow": "off",
//     "no-confusing-arrow": "error",
//     "no-constant-condition": [
//         "error",
//         {
//             "checkLoops": false
//         }
//     ],
//     "no-continue": "off",
//     "no-div-regex": "error",
//     "no-duplicate-imports": "error",
//     "no-else-return": "off",
//     "no-empty-function": "off",
//     "no-eq-null": "off",
//     "no-eval": [
//         "error",
//         {
//             "allowIndirect": true
//         }
//     ],
//     "no-extend-native": "error",
//     "no-extra-bind": "error",
//     "no-extra-label": "error",
//     "no-extra-parens": "off",
//     "no-floating-decimal": "error",
//     "no-implicit-coercion": [
//         "error",
//         {
//             "boolean": false,
//             "number": false,
//             "string": false
//         }
//     ],
//     "no-implicit-globals": "error",
//     "no-implied-eval": "error",
//     "no-inline-comments": "off",
//     "no-inner-declarations": [
//         "error",
//         "functions"
//     ],
//     "no-invalid-this": "off",
//     "no-iterator": "error",
//     "no-label-var": "error",
//     "no-labels": "error",
//     "no-lone-blocks": "error",
//     "no-lonely-if": "off",
//     "no-loop-func": "off",
//     "no-magic-numbers": "off",
//     "no-mixed-operators": "off",
//     "no-mixed-requires": "error",
//     "no-multi-assign": "off",
//     "no-multi-spaces": "off",
//     "no-multi-str": "error",
//     "no-multiple-empty-lines": "off",
//     "no-native-reassign": "error",
//     "no-negated-condition": "off",
//     "no-negated-in-lhs": "error",
//     "no-nested-ternary": "off",
//     "no-new": "error",
//     "no-new-func": "off",
//     "no-new-object": "off",
//     "no-new-require": "error",
//     "no-new-wrappers": "error",
//     "no-octal-escape": "error",
//     "no-param-reassign": "off",
//     "no-path-concat": "error",
//     "no-plusplus": "off",
//     "no-process-env": "off",
//     "no-process-exit": "error",
//     "no-proto": "off",
//     "no-prototype-builtins": "off",
//     "no-restricted-globals": "error",
//     "no-restricted-imports": "error",
//     "no-restricted-modules": "error",
//     "no-restricted-properties": "error",
//     "no-restricted-syntax": "error",
//     "no-return-assign": "off",
//     "no-return-await": "error",
//     "no-script-url": "error",
//     "no-self-compare": "off",
//     "no-sequences": "off",
//     "no-shadow": "off",
//     "no-shadow-restricted-names": "off",
//     "no-spaced-func": "off",
//     "no-sync": "off",
//     "no-tabs": "off",
//     "no-template-curly-in-string": "error",
//     "no-ternary": "off",
//     "no-throw-literal": "off",
//     "no-trailing-spaces": "off",
//     "no-undef-init": "off",
//     "no-undefined": "off",
//     "no-underscore-dangle": "off",
//     "no-unmodified-loop-condition": "error",
//     "no-unneeded-ternary": [
//         "error",
//         {
//             "defaultAssignment": true
//         }
//     ],
//     "no-unused-expressions": "off",
//     "no-use-before-define": "off",
//     "no-useless-call": "off",
//     "no-useless-computed-key": "error",
//     "no-useless-concat": "error",
//     "no-useless-constructor": "error",
//     "no-useless-rename": "error",
//     "no-useless-return": "off",
//     "no-var": "off",
//     "no-void": "off",
//     "no-warning-comments": "off",
//     "no-whitespace-before-property": "error",
//     "no-with": "error",
//     "nonblock-statement-body-position": [
//         "error",
//         "any"
//     ],
//     "object-curly-newline": "off",
//     "object-curly-spacing": [
//         "error",
//         "always"
//     ],
//     "object-property-newline": "off",
//     "object-shorthand": "off",
//     "one-var": "off",
//     "one-var-declaration-per-line": "off",
//     "operator-assignment": "off",
//     "operator-linebreak": "off",
//     "padded-blocks": "off",
//     "padding-line-between-statements": "error",
//     "prefer-arrow-callback": "off",
//     "prefer-const": "error",
//     "prefer-destructuring": "off",
//     "prefer-numeric-literals": "error",
//     "prefer-promise-reject-errors": "off",
//     "prefer-reflect": "off",
//     "prefer-rest-params": "off",
//     "prefer-spread": "off",
//     "prefer-template": "off",
//     "quote-props": "off",
//     "quotes": "off",
//     "radix": "off",
//     "require-await": "error",
//     "require-jsdoc": "off",
//     "rest-spread-spacing": "error",
//     "semi": "off",
//     "semi-spacing": "off",
//     "semi-style": [
//         "error",
//         "last"
//     ],
//     "sort-imports": "error",
//     "sort-keys": "off",
//     "sort-vars": "off",
//     "space-before-blocks": "off",
//     "space-before-function-paren": "off",
//     "space-in-parens": "off",
//     "space-infix-ops": "error",
//     "space-unary-ops": "off",
//     "spaced-comment": "off",
//     "strict": "off",
//     "switch-colon-spacing": "off",
//     "symbol-description": "error",
//     "template-curly-spacing": [
//         "error",
//         "never"
//     ],
//     "template-tag-spacing": "error",
//     "unicode-bom": [
//         "error",
//         "never"
//     ],
//     "valid-jsdoc": "off",
//     "vars-on-top": "error",
//     "wrap-iife": [
//         "error",
//         "any"
//     ],
//     "wrap-regex": "off",
//     "yield-star-spacing": "error"
// }
// };
