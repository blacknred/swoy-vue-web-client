module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  globals: {
    CONFIG: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    // "comma-dangle": 0,
    // "import/no-unresolved": ["error", { ignore: ["@/", "template"] }],
    // "no-plusplus": 0,
    // "no-underscore-dangle": 0,
    // "import/extensions": 0,
    // "prefer-template": 0,
    // "max-len": ["error", { code: 120 }],
    // "class-methods-use-this": 0,
    // indent: 0,
    // // 'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    // "arrow-parens": 0,
    // "prefer-destructuring": 0,
    // "no-else-return": 0,
    // "no-use-before-define": 0,
    // "consistent-return": 0,
    // eqeqeq: 0,
    // "no-restricted-syntax": [
    //   "error",
    //   {
    //     selector: "ForInStatement",
    //     message:
    //       "for..in loops iterate over the entire prototype chain, " +
    //       "which is virtually never what you want. Use Object.{keys,values,entries}, " +
    //       "and iterate over the resulting array.",
    //   },
    //   {
    //     selector: "LabeledStatement",
    //     message:
    //       "Labels are a form of GOTO; using them makes code confusing and " +
    //       "hard to maintain and understand.",
    //   },
    //   {
    //     selector: "WithStatement",
    //     message:
    //       "`with` is disallowed in strict mode because it makes code impossible " +
    //       "to predict and optimize.",
    //   },
    // ],
    // "spaced-comment": 0,
    // "no-shadow": ["error", { allow: ["state"] }],
    // "linebreak-style": 0,
    // "object-curly-newline": 0,
    // "func-names": 0,
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
