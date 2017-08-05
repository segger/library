const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      DEV: true,
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
  },
};
