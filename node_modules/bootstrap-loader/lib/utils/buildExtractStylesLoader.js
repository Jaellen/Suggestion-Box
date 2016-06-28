'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (loaders) {
  if (!loaders[0].startsWith('style')) {
    throw new Error('\n      If you want to use \'extract-text-webpack-plugin\' make sure\n      your \'styleLoaders\' array have \'style-loader\' at index 0.\n    ');
  }

  var ExtractTextPlugin = undefined;
  try {
    ExtractTextPlugin = require('extract-text-webpack-plugin');
  } catch (error) {
    throw new Error('\n      Could not find \'extract-text-webpack-plugin\' module.\n      Make sure it\'s installed in your \'node_modules/\' directory.\n    ');
  }
  var restLoaders = loaders.slice(1).map(function (loader) {
    return loader + '!';
  }).join('');
  return ExtractTextPlugin.extract('style', restLoaders);
};