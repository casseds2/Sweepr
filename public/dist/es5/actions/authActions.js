"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

module.exports = {

  getCurrentUser: function () {
    return function (dispatch) {};
  }

};
//Logic Here
//API MANAGER GET CURRENT
//.THEN()
//  return{type: constants.CURRENT_USER, data: data}
//.CATCH
// return {type: constanst.FAIL, data: data}