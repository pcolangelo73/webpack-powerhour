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
		loader: ExtractTextPlugin.extract('style-loader', lessLoader, {
      // Tell the less loader to start at `public/` instead of `public/css/` when building relative paths for fonts and images.
      // This lets us use relative paths in our less files and still build our fonts to `public/fonts` and images to `public/images`
      publicPath: '../'
    })
	},
  { test: /\.json$/, loader: 'json-loader' },
  { test: /\.woff$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
  { test: /\.woff2$/, loader: 'url?limit=10000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
  { test: /\.[ot]tf$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
  { test: /\.eot$/, loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },
	{ test: /\.svg$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=images/[name].[ext]' },
  { test: /\.png$/, loader: 'file?mimetype=image/png&name=images/[name].[ext]' },
	{ test: /\.jpe?g$/, loader: 'file?mimetype=image/jpeg&name=images/[name].[ext]' }
];
