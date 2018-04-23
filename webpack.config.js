const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log(path.resolve(__dirname, 'src/css'));

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './src/css', to: 'css' },
      { from: './src/img', to: 'img' }
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      title: 'Sample Webpack config with external css and images'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: []
  }
};
