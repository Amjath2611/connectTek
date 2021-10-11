module.exports = {

  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  extends: [
    // 'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'prettier',
    // 'prettier/@typescript-eslint',
    // "plugin:@typescript-eslint/eslint-recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // "prefer-const": "off",
    // '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|^req|^next' }],
    // '@typescript-eslint/no-explicit-any': 0,
    // '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 'react/prop-types': 0,
    // 'no-empty-function': 'off',
    // "eqeqeq": "off",
    // "curly": "error",
    // "quotes": ["error", "double"],
    // "plugin1/rule1": "error"
  },
  settings: {
    react: {
      version: 'detect',
    },
  }

};
