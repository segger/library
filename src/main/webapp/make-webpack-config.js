const path = require('path');
const webpack = require('webpack');

module.exports = function(options) {
  const entry = {
    vendor: ['bootstrap-loader'],
    app: './app/index.js',
  };

  const output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'assets/',
  };

  const loaders = [
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
      loader: 'style-loader!css-loader',
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'url-loader?limit=10000',
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      use: 'file-loader',
    },
    {
      test: /bootstrap-sass\/assets\/javascripts\//,
      use: 'imports-loader?jQuery=jquery',
    },
  ];

  const plugins = [
    new webpack.DefinePlugin({
      DEV: options.mock,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
    }),
  ];

  let proxy;
  if (options.proxy) {
    proxy = {
      '/api': {
        target: 'http://localhost:8080/',
        secure: false,
      },
    };
  }

  const devServer = {
    contentBase: path.join(__dirname, 'public'),
    port: 9000,
    proxy,
  };

  return {
    entry,
    output,
    module: {
      loaders,
    },
    plugins,
    devtool: options.devtool,
    devServer,
  };
};
