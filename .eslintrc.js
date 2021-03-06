module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
  },
  extends: ['plugin:@typescript-eslint/recommended'],
};
