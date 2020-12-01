"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _cors = _interopRequireDefault(require("cors"));

var _initialSetup = require("./libs/initialSetup");

var _product = _interopRequireDefault(require("./routes/product.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _role = _interopRequireDefault(require("./routes/role.routes"));

var _movement = _interopRequireDefault(require("./routes/movement.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]);
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name
  });
});
app.use('/api/product', _product["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/user', _user["default"]);
app.use('/api/role', _role["default"]);
app.use('/api/movement', _movement["default"]);
var _default = app;
exports["default"] = _default;