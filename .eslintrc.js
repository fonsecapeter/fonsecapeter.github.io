module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: 'airbnb-typescript',
  plugins: [
    '@typescript-eslint',
    'promise',
  ],
  rules: {
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'react/destructuring-assignmen': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
  }
};
