const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackConfig = {
  devServer: {
    disableHostCheck: true
  },
  target: 'web',
  mode: 'development',
  entry: './assets/src/index.js',
  output: {
    path: __dirname + '/.tmp/public',
    filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: 'file-loader',
        include: [__dirname + '/assets/', __dirname + '/node_modules/jquery-ui-dist/images/']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'assets/index.html'
    })
  ]
};


module.exports = () => {

  return webpackConfig;
};