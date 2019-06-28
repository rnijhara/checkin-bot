module.exports = {
  'env': {
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-console': 'off',
  }
};
