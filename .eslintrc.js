const pkg = require('./package.json');

const reactVersion = () => {
  if (pkg.dependencies && pkg.dependencies.react) {
    return { version: pkg.dependencies.react.replace(/[^0-9.]/g, '') };
  }
  if (pkg.devDependencies && pkg.devDependencies.react) {
    return { version: pkg.devDependencies.react.replace(/[^0-9.]/g, '') };
  }
};

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: ['jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'no-underscore-dangle': ['error', { allow: ['__INITIAL_STATE__'] }],
    'no-param-reassign': ['error', { props: false }],
    'react/prefer-stateless-function': ['warn'],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/no-onchange': 'off',

    // react/recommended違反を一旦warnレベルにしておく。
    'react/jsx-no-target-blank': 'warn',
    'react/no-deprecated': 'warn',
    'react/prop-types': ['off']
  },
  settings: {
    react: {
      ...reactVersion()
    }
  }
};
