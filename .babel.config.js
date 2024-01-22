module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: ['.jsx', '.js'],
      },
    ],
  ],
}
