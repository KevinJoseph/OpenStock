"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var movementSchema = new _mongoose.Schema({
  provider: String,
  invoice: String,
  price_unit: Number,
  price_total: Number,
  quantity: Number,
  type_movement: String,
  date: Date
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Movement', movementSchema);

exports["default"] = _default;