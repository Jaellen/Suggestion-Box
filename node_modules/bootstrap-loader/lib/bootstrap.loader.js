'use strict';

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _loaderUtils = require('loader-utils');

var _loaderUtils2 = _interopRequireDefault(_loaderUtils);

var _resolveModule = require('./utils/resolveModule');

var _resolveModule2 = _interopRequireDefault(_resolveModule);

var _checkBootstrapVersion = require('./utils/checkBootstrapVersion');

var _checkBootstrapVersion2 = _interopRequireDefault(_checkBootstrapVersion);

var _processStyleLoaders = require('./utils/processStyleLoaders');

var _processStyleLoaders2 = _interopRequireDefault(_processStyleLoaders);

var _joinLoaders = require('./utils/joinLoaders');

var _joinLoaders2 = _interopRequireDefault(_joinLoaders);

var _buildExtractStylesLoader = require('./utils/buildExtractStylesLoader');

var _buildExtractStylesLoader2 = _interopRequireDefault(_buildExtractStylesLoader);

var _createRequire = require('./utils/createRequire');

var _createRequire2 = _interopRequireDefault(_createRequire);

var _logger = require('./utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _bootstrap = require('./bootstrap.config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// For Node <= v0.12.x Babel polyfill is required
if (_semver2.default.lt(process.version, '4.0.0') && !global._babelPolyfill) {
  try {
    require('babel-polyfill');
  } catch (e) {
    try {
      require('babel-core/polyfill');
    } catch (ee) {
      try {
        require('babel/polyfill');
      } catch (eee) {
        throw new Error('\n          For Node <= v0.12.x Babel polyfill is required.\n          Make sure it\'s installed in your \'node_modules/\' directory.\n          ' + eee + '\n        ');
      }
    }
  }
} /* eslint func-names: 0 */

module.exports = function () {};

/**
 * Bootstrap loader entry point
 *
 * @param {string} source - Path to dummy file with empty object.
 *                          Needed b/c we have to apply loader to some file.
 * @returns {string}
 */
module.exports.pitch = function (source) {
  if (this.cacheable) this.cacheable();

  global.__DEBUG__ = _bootstrap.loglevel === 'debug' || process.env.DEBUG === '*';

  _logger2.default.debug('Hey, we\'re in DEBUG mode! Yabba dabba doo!');

  _logger2.default.debug('Context:', this.context);
  _logger2.default.debug('Using Bootstrap version:', _bootstrap.bootstrapVersion);

  // Resolve `bootstrap` package
  var bootstrapNPMModule = _bootstrap.bootstrapVersion === 3 ? 'bootstrap-sass' : 'bootstrap';
  _logger2.default.debug('Using Bootstrap module:', bootstrapNPMModule);

  var bootstrapPath = (0, _resolveModule2.default)(bootstrapNPMModule);

  if (!bootstrapPath) {
    throw new Error('\n      Could not find path to \'' + bootstrapNPMModule + '\' module.\n      Make sure it\'s installed in your \'node_modules/\' directory.\n    ');
  }

  var bootstrapRelPath = _path2.default.relative(this.context, bootstrapPath);

  _logger2.default.debug('Bootstrap module location (abs):', bootstrapPath);
  _logger2.default.debug('Bootstrap module location (rel):', bootstrapRelPath);

  var bootstrapNPMVersion = (0, _checkBootstrapVersion2.default)(_bootstrap.bootstrapVersion, bootstrapPath);

  if (!bootstrapNPMVersion.allGood) {
    throw new Error('\n      Looks like you have wrong version of Bootstrap.\n      Loader wants: ' + _bootstrap.bootstrapVersion + '.x.x\n      Installed version: ' + bootstrapNPMVersion.version + '\n    ');
  }
  _logger2.default.debug('Bootstrap NPM package version:', bootstrapNPMVersion.version);

  var _loaderUtils$parseQue = _loaderUtils2.default.parseQuery(this.query);

  var extractStyles = _loaderUtils$parseQue.extractStyles;

  _logger2.default.debug('Query from webpack config:', this.query || '*none*');

  var config = (0, _bootstrap.createConfig)({ bootstrapPath: bootstrapPath, bootstrapRelPath: bootstrapRelPath, extractStyles: extractStyles });
  _logger2.default.debug('Normalized params:', '\n', config);

  global.__BOOTSTRAP_CONFIG__ = config;

  var result = [];

  var dummySourceRel = _loaderUtils2.default.urlToRequest(_path2.default.relative(this.context, source));

  // Handle styles
  if (config.styles) {
    if (!config.styleLoaders) {
      throw new Error('\n        Could not find \'styleLoaders\' in your config.\n        You can use default ones:\n          styleLoaders: [\'style\', \'css\', \'sass\']\n      ');
    }

    var styleLoadersWithSourceMapsAndResolveUrlLoader = (0, _processStyleLoaders2.default)(config.styleLoaders);

    var styleLoaders = config.extractStyles ? (0, _buildExtractStylesLoader2.default)(styleLoadersWithSourceMapsAndResolveUrlLoader) : (0, _joinLoaders2.default)(styleLoadersWithSourceMapsAndResolveUrlLoader);
    var bootstrapStylesLoader = _loaderUtils2.default.urlToRequest(_path2.default.relative(this.context, require.resolve(_loaderUtils2.default.urlToRequest('bootstrap.styles.loader.js')))) + '!';
    var styles = styleLoaders + bootstrapStylesLoader + dummySourceRel;

    result.push((0, _createRequire2.default)(styles));
  }

  // Handle scripts
  if (config.scripts) {
    var bootstrapScriptsLoader = _loaderUtils2.default.urlToRequest(_path2.default.relative(this.context, require.resolve(_loaderUtils2.default.urlToRequest('bootstrap.scripts.loader.js')))) + '!';
    var scripts = bootstrapScriptsLoader + dummySourceRel;

    result.push((0, _createRequire2.default)(scripts));
  }

  var resultOutput = result.map(function (loader) {
    return loader + '\n';
  }).join('');

  _logger2.default.debug('Requiring:', '\n', resultOutput);

  return resultOutput;
};