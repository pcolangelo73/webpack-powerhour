'use strict';

if(typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'production';
}

const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: [
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
};
