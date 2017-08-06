const path = require('path');
const webpack = require('webpack');

module.exports = function(options) {
  const entry = {
    main: './app/index.js',
  };

  const output = {
    path: path.join(__dirname, 'public'),
    filename: 'app.bundle.js',
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
  ];

  const plugins = [
    new webpack.DefinePlugin({
      DEV: options.mock,
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
    devtool: 'source-map',
    devServer,
  };
};
