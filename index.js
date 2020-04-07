module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  'ignorePatterns': ['build', 'dist'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error', {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'explicit',
        parameterProperties: 'explicit'
      }
    }],
    'semi': 'off',
    '@typescript-eslint/semi': [
      'error',
      'never'
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'indent': [
      'error',
      2
    ]
  }
}

