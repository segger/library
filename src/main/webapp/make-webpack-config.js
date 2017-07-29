const path = require('path');
const webpack = require('webpack');

module.exports = function (options) {
    const entry = {
        main: [path.join(__dirname + '/src', '/index.js')]
    };

    const defaultLoaders = [
        { test: /\.html$/, use: ['html-loader'] },
    ];

    const publicPath = '/';

    const output = {
        path: __dirname + '/dist',
        publicPath,
        filename: 'books.js'
    };

    const jsRules = [
        { test: /\.js?$/,
          use: [{ loader: 'ng-annotate-loader', options: { es6: true, explicitOnly: false }},
              'babel-loader'],
          exclude: /node_modules/,
        }
    ];

    const definitions = {
        'process.env.NODE_ENV': options.debug ? JSON.stringify('development') : JSON.stringify('production')
    };

    const plugins = [];
    plugins.push(
        new webpack.DefinePlugin(definitions)
    );

    const alias = {};
    const externals = [];

    return {
        entry,
        output,
        target: 'web',
        module: {
            rules: []
                .concat(jsRules)
                .concat(defaultLoaders)
        },
        devtool: options.devtool,
        externals,
        resolve: {
            modules: [
                'web_modules',
                'node_modules',
            ],
            extensions: ['.web.js','.js'],
            mainFields: ['browser','module','jsnext:main','main'],
            alias,
        },
        plugins
    }
};