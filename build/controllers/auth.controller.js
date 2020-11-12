"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, phone, password, position, roles, newUser, foundRoles, role, saveUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, phone = _req$body.phone, password = _req$body.password, position = _req$body.position, roles = _req$body.roles;
            console.log(name, position);
            _context.t0 = _User["default"];
            _context.t1 = name;
            _context.t2 = email;
            _context.t3 = phone;
            _context.t4 = position;
            _context.next = 9;
            return _User["default"].encryptPassword(password);

          case 9:
            _context.t5 = _context.sent;
            _context.t6 = {
              name: _context.t1,
              email: _context.t2,
              phone: _context.t3,
              position: _context.t4,
              password: _context.t5
            };
            newUser = new _context.t0(_context.t6);

            if (!roles) {
              _context.next = 19;
              break;
            }

            _context.next = 15;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 15:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 23;
            break;

          case 19:
            _context.next = 21;
            return _Role["default"].findOne({
              name: 'user'
            });

          case 21:
            role = _context.sent;
            newUser.roles = [role._id];

          case 23:
            _context.next = 25;
            return newUser.save();

          case 25:
            saveUser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: saveUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 horus

            });
            res.json({
              token: token
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 3:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "User Not Found"
            }));

          case 6:
            console.log(req.body.password, " ", userFound.password);
            _context2.next = 9;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 9:
            matchPassword = _context2.sent;
            console.log(matchPassword);

            if (matchPassword) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "Invalid Password"
            }));

          case 13:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 hours

            });
            res.json({
              token: token
            });
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;