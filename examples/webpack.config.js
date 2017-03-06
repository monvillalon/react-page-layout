var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var port = 3000 || process.env.PORT;

// Common plugins
var plugins = [
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'),
    path: './',
    filename: 'index.html',
  }),
  new webpack.HotModuleReplacementPlugin(),
];

// Common rules
var rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'react-hot-loader/webpack',
      'babel-loader',
    ],
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      'style-loader',
      'css-loader?modules',
      'sass-loader?sourceMap',
    ],
  },
];

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + port,
    './index.js',
  ],
  output: {
    publicPath: '/',
    filename: 'app-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      './',
    ],
  },
  plugins,
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    port,
    compress: false,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
    },
  },
};
