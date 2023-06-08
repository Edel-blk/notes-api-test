module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'key-spacing': 'error',
    'arrow-spacing': 'error',
    'space-in-parens': 'error',
    'max-len': 0,
    'camelcase': 0,
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': 0,
    'no-trailing-spaces': 'error',
    'no-else-return': 'error',
  }
};
