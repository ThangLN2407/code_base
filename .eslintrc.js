module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      // your babel options
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // 'no-unused-vars': ['error', { vars: 'all' }],
    "no-unused-vars": "warn",
    'react/prop-types': 'off', // Tắt kiểm tra PropTypes nếu bạn không sử dụng nó
    'react/display-name': ['error', { ignoreTranspilerName: false }],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
}
