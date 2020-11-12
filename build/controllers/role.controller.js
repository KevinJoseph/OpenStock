"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoleById = exports.updateRoleById = exports.getRoleById = exports.getRoles = exports.createRole = void 0;

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var name, newRole, roleSaved;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            name = req.body.name;
            newRole = new _Role["default"]({
              name: name
            });
            _context.next = 4;
            return newRole.save();

          case 4:
            roleSaved = _context.sent;
            res.status(201).json(roleSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRole = createRole;

var getRoles = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var roles;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Role["default"].find();

          case 2:
            roles = _context2.sent;
            res.json(roles);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRoles = getRoles;

var getRoleById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var role;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Role["default"].findById(req.params.roleId);

          case 2:
            role = _context3.sent;
            res.status(200).json(role);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getRoleById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getRoleById = getRoleById;

var updateRoleById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updateRole;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Role["default"].findByIdAndUpdate(req.params.roleId, req.body, {
              "new": true
            });

          case 2:
            updateRole = _context4.sent;
            res.status(200).json(updateRole);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateRoleById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRoleById = updateRoleById;

var deleteRoleById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var roleId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            roleId = req.params.roleId;
            _context5.next = 3;
            return _Role["default"].findByIdAndRemove(roleId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteRoleById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteRoleById = deleteRoleById;