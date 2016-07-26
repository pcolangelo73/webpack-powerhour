'use strict';

if(typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'development';
}

const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: [
    './index.jsx'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  },
  devServer: {
    contentBase: './public',
    inline: true,
    profile: true,            
    colors: true,
    port: 8080
  },
  debug: true
};
