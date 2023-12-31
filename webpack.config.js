// const path = require('path')
// const webpack = require('webpack')
// const lodash = require('lodash')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// function getAppConfig(env) {
//   let data = require(`./src/configs/${env}`)
//   const defaultData = require('./src/configs/default')

//   data = lodash.assign(defaultData, data)

//   return {
//     ...data,
//     ENV: env,
//   }
// }

// module.exports = env => {
//   const NODE_ENV = (env && env.NODE_ENV) || 'local'
//   const IS_DEV = NODE_ENV === 'development' || NODE_ENV === 'local'
//   const appConfig = getAppConfig(NODE_ENV)

//   process.env.NODE_ENV = NODE_ENV

//   console.log('Node ENV: %s', NODE_ENV)
//   console.log('Configs: ', appConfig)

//   return {
//     devtool: IS_DEV ? 'source-map' : false,
//     entry: path.resolve(__dirname, IS_DEV ? 'src/index.dev.js' : 'src'),
//     output: {
//       filename: '[name][hash].js',
//       path: path.resolve(__dirname, 'build'),
//       publicPath: appConfig.PUBLIC_PATH,
//     },
//     optimization: {
//       splitChunks: {
//         chunks: 'all',
//       },
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /(node_modules|bower_components)/,
//           use: ['babel-loader'],
//         },
//         {
//           test: /\.(js|jsx)$/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               compact: true,
//             },
//           },
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
//             'css-loader',
//             'postcss-loader',
//             'sass-loader',
//           ],
//         },
//         {
//           test: /\.css$/,
//           use: [
//             IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
//             'css-loader',
//             'postcss-loader',
//           ],
//         },
//         {
//           test: /\.html$/,
//           use: [
//             {
//               loader: 'html-loader',
//               options: {
//                 minimize: !IS_DEV,
//                 root: path.resolve(__dirname, 'src'),
//               },
//             },
//           ],
//         },
//         {
//           test: /\.(jpg|jpeg|gif|png|svg|woff|eot|ttf|otf|pdf)$/,
//           use: ['file-loader'],
//         },
//         {
//           test: /\.(mov|mp4)$/,
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                 name: '[name].[ext]',
//               },
//             },
//           ],
//         },
//       ],
//     },
//     plugins: [
//       // new HtmlWebpackPlugin({
//       //   template: path.resolve(__dirname, 'src/index.ejs'),
//       //   // favicon: path.resolve(__dirname, 'src/resources/images/002.png'),
//       // }),
//       // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
//       new MiniCssExtractPlugin({
//         filename: '[name][hash].css',
//       }),
//       new webpack.DefinePlugin({
//         'window._CONFIG': JSON.stringify(appConfig),
//       }),
//       new webpack.HotModuleReplacementPlugin(),
//     ],
//   }
// }
