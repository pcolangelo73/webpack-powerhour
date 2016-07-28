'use strict';

if(typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'production';
}

const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './javascript/index.jsx',
    './styles/app.less'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[chunkhash].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new ExtractTextPlugin('css/[chunkhash].bundle.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.ProvidePlugin({
      'moment': 'moment'
    }),
    new webpack.optimize.UglifyJsPlugin({
			compress: {
        warnings: false
    	},
			output: {
				comments: false
			}
		}),
    new HtmlWebpackPlugin({
      template: 'template.html'
    })
  ]
};
