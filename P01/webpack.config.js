'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  }
};
