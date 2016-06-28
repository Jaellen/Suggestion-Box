'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (module) {
  try {
    var resolvedPath = undefined;
    _resolve2.default.sync(module, {
      packageFilter: function packageFilter(pkg, pathToModule) {
        resolvedPath = pathToModule;
        return pkg;
      }
    });
    return resolvedPath;
  } catch (error) {
    return false;
  }
};

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }