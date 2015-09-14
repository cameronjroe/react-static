var StaticSiteGeneratorPlugin = require('static-render-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var webpack = require('webpack');

var routes = [
  '/',
  '/about',
  {
    path: '/not-found',
    output: '404.html'
  }
];

module.exports = {
  
  entry: path.join(srcPath, 'entry.js'),

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules', 'src']
  },

  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?stage=0' }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('bundle.js', routes)
  ],

  devServer: {
    contentBase: './dist',
    quiet: true
  }
  
};