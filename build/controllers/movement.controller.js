"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMovementById = exports.updateMovementById = exports.getMovementById = exports.getMovements = exports.createMovement = void 0;

var _Movement = _interopRequireDefault(require("../models/Movement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createMovement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, provider, invoice, price_unit, price_total, quantity, type_movement, date, newMovement, movementSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, provider = _req$body.provider, invoice = _req$body.invoice, price_unit = _req$body.price_unit, price_total = _req$body.price_total, quantity = _req$body.quantity, type_movement = _req$body.type_movement, date = _req$body.date;
            newMovement = new _Movement["default"]({
              provider: provider,
              invoice: invoice,
              price_unit: price_unit,
              price_total: price_total,
              quantity: quantity,
              type_movement: type_movement,
              date: date
            });
            _context.next = 4;
            return newMovement.save();

          case 4:
            movementSaved = _context.sent;
            console.log("create movement");
            res.status(201).json(movementSaved);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMovement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMovement = createMovement;

var getMovements = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var movements;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Movement["default"].find();

          case 2:
            movements = _context2.sent;
            console.log("list movement");
            res.json(movements);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMovements(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMovements = getMovements;

var getMovementById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var movement;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Movement["default"].findById(req.params.movementId);

          case 2:
            movement = _context3.sent;
            res.status(200).json(movement);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMovementById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMovementById = getMovementById;

var updateMovementById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updateMovement;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Movement["default"].findByIdAndUpdate(req.params.movementId, req.body, {
              "new": true
            });

          case 2:
            updateMovement = _context4.sent;
            res.status(200).json(updateMovement);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateMovementById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateMovementById = updateMovementById;

var deleteMovementById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var movementId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            movementId = req.params.movementId;
            _context5.next = 3;
            return _Movement["default"].findByIdAndRemove(movementId);

          case 3:
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteMovementById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteMovementById = deleteMovementById;