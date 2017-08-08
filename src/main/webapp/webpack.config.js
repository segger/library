const makeWebpackConfig = require('./make-webpack-config');

module.exports = makeWebpackConfig({
  mock: false,
  devtool: 'source-map',
});
