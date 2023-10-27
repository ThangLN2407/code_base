const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // Điểm vào của ứng dụng
  output: {
    path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
    filename: 'main.js', // Tên tệp đầu ra
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Đặt các đuôi tệp bạn muốn Webpack tự động tìm kiếm
    alias: {
      '@components': path.resolve(__dirname, './src/components'),

      // Thêm các alias khác nếu cần
    },
  },
}
