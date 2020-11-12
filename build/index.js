"use strict";

require("babel-polyfill");

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// requirements async await deploy heroku
_app["default"].set('port', process.env.PORT || 3000);

_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Server listeng port ' + _app["default"].get('port'));
});