'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsLoaders = ['babel'];
let lessLoader = 'css-loader!less-loader';

if(process.env.NODE_ENV !== 'production') {
  lessLoader += '?sourceMap';       //Add LESS sourcemaps
  jsLoaders.push('eslint-loader');  //ESLint loader
}

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loaders: jsLoaders
  },
  {
		test: /\.less$/,
		exclude: /node_modules/,
		loader: ExtractTextPlugin.extract('style-loader', lessLoader)
	},
  { test: /\.json$/, loader: 'json-loader' }
];
