"use strict";
function absFloor(v) {
  return v < 0 ? Math.ceil(v) || 0 : Math.floor(v);
}
exports.absFloor = absFloor;
