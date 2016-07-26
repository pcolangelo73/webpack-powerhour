'use strict';

if(typeof process.env.NODE_ENV === 'undefined') {
  process.env.NODE_ENV = 'development';
}

const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './javascript/index.jsx',
    './styles/app.less'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js'
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
  plugins: [
    new ExtractTextPlugin('css/bundle.css', {
      allChunks: true
    })
  ],
  debug: true
};
