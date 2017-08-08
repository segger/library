const makeWebpackConfig = require('./make-webpack-config');

module.exports = makeWebpackConfig({
  mock: false,
  proxy: true,
  devtool: 'cheap-module-eval-source-map',
});
