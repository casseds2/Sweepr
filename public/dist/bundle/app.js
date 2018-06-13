/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/authActions.js":
/*!************************************!*\
  !*** ./src/actions/authActions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.logout = logout;

var _connectedReactRouter = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");

var _jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerRequest = function registerRequest() {
  return {
    type: _constants2.default.REGISTER_REQUEST
  };
};

var registerSuccess = function registerSuccess(payload) {
  return {
    type: _constants2.default.REGISTER_SUCCESS,
    payload: payload
  };
};

var registerError = function registerError(error) {
  return {
    type: _constants2.default.REGISTER_FAILURE,
    error: error
  };
};

var loginRequest = function loginRequest() {
  return {
    type: _constants2.default.LOGIN_REQUEST
  };
};

var loginSuccess = function loginSuccess(payload) {
  return {
    type: _constants2.default.LOGIN_SUCCESS,
    payload: payload
  };
};

var loginFailure = function loginFailure(error) {
  return {
    type: _constants2.default.LOGIN_FAILURE,
    error: error
  };
};

var logoutSuccess = function logoutSuccess() {
  return {
    type: _constants2.default.LOGOUT_SUCCESS
  };
};

function register(userCredentials) {
  return function (dispatch) {
    _utils.APIManager.post('/auth/users', userCredentials).then(function (response) {
      var id_token = response.id_token,
          access_token = response.access_token;

      var userData = (0, _jwtDecode2.default)(id_token);
      localStorage.setItem('id_token', id_token);
      localStorage.setItem('access_token', access_token);
      dispatch(registerSuccess(userData));
      dispatch((0, _connectedReactRouter.push)('/'));
    }).catch(function (error) {
      return dispatch(registerError(error));
    });
  };
}

function login(username, password) {
  return function (dispatch) {
    dispatch(loginRequest());
    _utils.APIManager.post('/auth/sessions/create', {
      username: username,
      password: password
    }).then(function (response) {
      var id_token = response.id_token,
          access_token = response.access_token;

      var userData = (0, _jwtDecode2.default)(id_token);
      localStorage.setItem('id_token', id_token);
      localStorage.setItem('access_token', access_token);
      dispatch(loginSuccess(userData));
      dispatch((0, _connectedReactRouter.push)('/'));
    }).catch(function (error) {
      return dispatch(loginFailure(error));
    });
  };
}

function logout(username) {
  return function (dispatch) {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    dispatch(logoutSuccess());
  };
}

/***/ }),

/***/ "./src/actions/competitionActions.js":
/*!*******************************************!*\
  !*** ./src/actions/competitionActions.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  fetchCompetition: function fetchCompetition(id) {
    return function (dispatch) {
      dispatch({
        type: _constants2.default.FETCHING_COMPETITION,
        status: 'loading'
      });
      _utils.WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id, null).then(function (data) {
        dispatch({
          type: _constants2.default.FETCHED_COMPETITION,
          data: data
        });
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.ERROR_FETCHING_COMPETITION,
          data: null
        });
      });
    };
  },
  fetchTeams: function fetchTeams(id) {
    return function (dispatch) {
      dispatch({
        type: _constants2.default.FETCHING_TEAMS,
        status: 'loading'
      });
      _utils.WorldCupApi.get('http://api.football-data.org/v1/competitions/' + id + '/teams', null).then(function (data) {
        dispatch({
          type: _constants2.default.FETCHED_TEAMS,
          data: data,
          competitionID: id
        });
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.ERROR_FETCHING_TEAMS,
          data: null
        });
      });
    };
  }
};

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.competitionActions = exports.userActions = exports.sweepstakeActions = exports.authActions = undefined;
exports.navigateTo = navigateTo;

var _connectedReactRouter = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");

var _sweepstakeActions = __webpack_require__(/*! ./sweepstakeActions */ "./src/actions/sweepstakeActions.js");

var _sweepstakeActions2 = _interopRequireDefault(_sweepstakeActions);

var _authActions = __webpack_require__(/*! ./authActions */ "./src/actions/authActions.js");

var authActions = _interopRequireWildcard(_authActions);

var _userActions = __webpack_require__(/*! ./userActions */ "./src/actions/userActions.js");

var _userActions2 = _interopRequireDefault(_userActions);

var _competitionActions = __webpack_require__(/*! ./competitionActions */ "./src/actions/competitionActions.js");

var _competitionActions2 = _interopRequireDefault(_competitionActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function navigateTo(href) {
  return function (dispatch) {
    dispatch((0, _connectedReactRouter.push)(href));
  };
}

exports.authActions = authActions;
exports.sweepstakeActions = _sweepstakeActions2.default;
exports.userActions = _userActions2.default;
exports.competitionActions = _competitionActions2.default;

/***/ }),

/***/ "./src/actions/sweepstakeActions.js":
/*!******************************************!*\
  !*** ./src/actions/sweepstakeActions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var _actions = __webpack_require__(/*! ../actions */ "./src/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  createSweepstake: function createSweepstake(params) {
    return function (dispatch) {
      _utils.APIManager.post('/api/sweepstake', params).then(function (data) {
        dispatch({
          type: _constants2.default.SWEEPSTAKE_CREATED,
          data: data.data
        });
        dispatch((0, _actions.navigateTo)('/sweepstake/' + data.data._id));
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.SWEEPSTAKE_CREATED,
          data: null
        });
      });
    };
  },

  generateSweepstake: function generateSweepstake(sweepstake, index) {
    return function (dispatch) {
      dispatch({
        type: _constants2.default.GENERATING_SWEEPSTAKE,
        satus: 'loading'
      });
      _utils.RandomAssigner.randomizeGroups(sweepstake.groups, sweepstake.members) //FIx Function for Data Structure
      .then(function (data) {
        sweepstake['sweepstake'] = data;
        sweepstake['active'] = !sweepstake.active;
        _utils.APIManager.put('/api/sweepstake/' + sweepstake._id, sweepstake).then(function (data) {
          dispatch((0, _actions.navigateTo)('/sweepstake/' + sweepstake._id));
          dispatch({
            type: _constants2.default.SWEEPSTAKE_GENERATED,
            data: sweepstake,
            index: index
          });
          dispatch({
            type: _constants2.default.SWEEPSTAKE_SELECTED,
            data: sweepstake
          });
        }).catch(function (err) {
          dispatch({
            type: _constants2.default.SWEEPSTAKE_GENERATED,
            data: null
          });
        });
      });
    };
  },

  fetchSweepstakes: function fetchSweepstakes() {
    return function (dispatch) {
      dispatch({
        type: _constants2.default.FETCHING_SWEEPSTAKES,
        status: 'loading'
      });
      _utils.APIManager.get('/api/sweepstake', null).then(function (data) {
        dispatch({
          type: _constants2.default.SWEEPSTAKES_RECEIVED,
          data: data
        });
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.SWEEPSTAKES_RECEIVED,
          data: null
        });
      });
    };
  },

  fetchSweepstake: function fetchSweepstake(id) {
    return function (dispatch) {
      dispatch({
        type: _constants2.default.FETCHING_SWEEPSTAKE,
        status: 'loading'
      });
      _utils.APIManager.get('/api/sweepstake/' + id).then(function (data) {
        dispatch({
          type: _constants2.default.SWEEPSTAKE_RECEIVED,
          data: data.data
        });
      }).catch(function (err) {
        alert('Could Not Find Sweepstake!');
        dispatch((0, _actions.navigateTo)('/'));
        dispatch({
          type: _constants2.default.SWEEPSTAKE_RECEIVED,
          data: null
        });
      });
    };
  },

  sweepstakeSelected: function sweepstakeSelected(sweepstake) {
    return function (dispatch) {
      dispatch((0, _actions.navigateTo)('/sweepstake/' + sweepstake._id));
      dispatch({
        type: _constants2.default.SWEEPSTAKE_SELECTED,
        data: sweepstake
      });
    };
  },

  addMember: function addMember(id, members, index) {
    console.log('Members: ' + JSON.stringify(members));
    return function (dispatch) {
      _utils.APIManager.put('/api/sweepstake/' + id, { members: members }).then(function (data) {
        dispatch((0, _actions.navigateTo)('/'));
        dispatch({
          type: _constants2.default.MEMBER_ADDED,
          data: data,
          index: index
        });
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.FAILED_ADD_MEMBER,
          data: null
        });
      });
    };
  },

  deleteSweepstake: function deleteSweepstake(id, index) {
    console.log('Index: ' + index);
    return function (dispatch) {
      _utils.APIManager.delete('/api/sweepstake/' + id).then(function (data) {
        dispatch((0, _actions.navigateTo)('/'));
        dispatch({
          type: _constants2.default.SWEEPSTAKE_DELETED,
          index: index,
          data: data
        });
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.SWEEPSTAKE_DELETED,
          data: null
        });
      });
    };
  }
};

/***/ }),

/***/ "./src/actions/userActions.js":
/*!************************************!*\
  !*** ./src/actions/userActions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  fetchAllUsers: function fetchAllUsers() {
    return function (dispatch) {
      dispatch({
        type: _constants2.default.FETCHING_USERS,
        status: 'loading'
      });
      _utils.APIManager.get('/api/profile', null).then(function (data) {
        dispatch({
          type: _constants2.default.USERS_RECEIVED,
          data: data
        });
      }).catch(function (err) {
        alert(err);
        dispatch({
          type: _constants2.default.USERS_RECEIVED,
          data: null
        });
      });
    };
  }
};

/***/ }),

/***/ "./src/components/containers/LoginForm.js":
/*!************************************************!*\
  !*** ./src/components/containers/LoginForm.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

var mapStateToProps = function mapStateToProps(state) {
  return {
    pending: state.auth.pending,
    user: state.auth.user,
    error: state.auth.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(username, password) {
      return dispatch(_actions.authActions.login(username, password));
    },
    navigateToRegisterPage: function navigateToRegisterPage(href) {
      return dispatch((0, _actions.navigateTo)('/register'));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_presentation.LoginForm);

/***/ }),

/***/ "./src/components/containers/PrivateRoute.js":
/*!***************************************************!*\
  !*** ./src/components/containers/PrivateRoute.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(function (state) {
  return _extends({}, state.auth);
})(function (props) {
  return props.user ? _react2.default.createElement(_reactRouterDom.Route, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
});

/***/ }),

/***/ "./src/components/containers/Profile.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Profile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _compose = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  header: {
    textAlign: 'center',
    marginTop: 15
  }
};

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(
        _core.Grid,
        { container: true, justify: 'center' },
        _react2.default.createElement(
          _core.Grid,
          { item: true, xs: true, className: classes.header },
          _react2.default.createElement(
            _core.Typography,
            { variant: 'display1' },
            'Stephen Cassedy'
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    currentUser: state.auth.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _compose2.default)((0, _core.withStyles)(styles), (0, _reactRedux.connect)(stateToProps, dispatchToProps))(Profile);

/***/ }),

/***/ "./src/components/containers/RegisterForm.js":
/*!***************************************************!*\
  !*** ./src/components/containers/RegisterForm.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

var mapStateToProps = function mapStateToProps(state) {
  return {
    pending: state.auth.pending,
    user: state.auth.user,
    error: state.auth.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    register: function register(userCreds) {
      return dispatch(_actions.authActions.register(userCreds));
    },
    navigateToLoginPage: function navigateToLoginPage(href) {
      return dispatch((0, _actions.navigateTo)('/login'));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_presentation.RegisterForm);

/***/ }),

/***/ "./src/components/containers/Sidebar.js":
/*!**********************************************!*\
  !*** ./src/components/containers/Sidebar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    navigateTo: function navigateTo(href) {
      return dispatch((0, _actions.navigateTo)(href));
    },
    logout: function logout() {
      return dispatch(_actions.authActions.logout());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_presentation.Sidebar);

/***/ }),

/***/ "./src/components/containers/Sweepstake.js":
/*!*************************************************!*\
  !*** ./src/components/containers/Sweepstake.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _compose = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");

var _compose2 = _interopRequireDefault(_compose);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

var _materialUi = __webpack_require__(/*! material-ui */ "./node_modules/material-ui/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  caption: {
    marginTop: 10,
    textAlign: 'center'
  },
  groups: {
    margin: 10
  }
};

var Sweepstake = function (_Component) {
  _inherits(Sweepstake, _Component);

  function Sweepstake() {
    _classCallCheck(this, Sweepstake);

    return _possibleConstructorReturn(this, (Sweepstake.__proto__ || Object.getPrototypeOf(Sweepstake)).call(this));
  }

  _createClass(Sweepstake, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (Object.keys(this.props.sweepstake.current).length === 0) {
        this.props.fetchSweepstake(this.props.id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          classes = _props.classes;
      var current = this.props.sweepstake.current;

      var name = Object.keys(current).length === 0 ? '' : current.name;
      var groups = Object.keys(current).length === 0 ? [] : current.groups;
      var sweepstake = Object.keys(current).length === 0 ? [] : current.sweepstake;

      var primaryDisplay = current.active ? _react2.default.createElement(_presentation.AssignedTeams, { sweepstake: sweepstake }) : _react2.default.createElement(_presentation.CreateFormGroups, { groups: groups, isEditing: false });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { item: true, className: classes.caption },
            _react2.default.createElement(
              _core.Typography,
              { variant: 'display3' },
              name
            )
          )
        ),
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { item: true, xs: 8, className: classes.groups },
            primaryDisplay
          )
        )
      );
    }
  }]);

  return Sweepstake;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    sweepstake: state.sweepstake,
    currentUser: state.auth.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    deleteSweepstake: function deleteSweepstake(id) {
      return dispatch(_actions.sweepstakeActions.deleteSweepstake(id));
    },
    fetchSweepstake: function fetchSweepstake(id) {
      return dispatch(_actions.sweepstakeActions.fetchSweepstake(id));
    },
    joinSweepstake: function joinSweepstake(sweepstake, id, user) {
      return dispatch(_actions.sweepstakeActions.addMember(sweepstake, user, index));
    }
  };
};

exports.default = (0, _compose2.default)((0, _core.withStyles)(styles), (0, _reactRedux.connect)(stateToProps, dispatchToProps))(Sweepstake);

/***/ }),

/***/ "./src/components/containers/SweepstakeForm.js":
/*!*****************************************************!*\
  !*** ./src/components/containers/SweepstakeForm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemSecondaryAction = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/ListItemSecondaryAction/index.js");

var _ListItemSecondaryAction2 = _interopRequireDefault(_ListItemSecondaryAction);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");

var _Delete2 = _interopRequireDefault(_Delete);

var _Add = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");

var _Add2 = _interopRequireDefault(_Add);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

var _compose = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  paperStyle: {
    width: 100 + '%',
    marginTop: 20,
    marginBottom: 20
  },
  textEntryStyle: {
    marginLeft: 30,
    marginRight: 30
  },
  saveButtonStyle: {
    margin: 5
  },
  dateTimeStyle: {
    marginLeft: 30,
    marginTop: 20
  }
};

var SweepstakeForm = function (_Component) {
  _inherits(SweepstakeForm, _Component);

  function SweepstakeForm() {
    _classCallCheck(this, SweepstakeForm);

    var _this = _possibleConstructorReturn(this, (SweepstakeForm.__proto__ || Object.getPrototypeOf(SweepstakeForm)).call(this));

    _this.state = {
      name: '',
      description: '',
      owner: '',
      members: [],
      groups: {},
      entryFee: 0,
      selectedGroup: -1,
      numGroups: 0,
      joinExpiryDate: '2018-06-14T12:00'
    };
    _this.updateField = _this.updateField.bind(_this);
    _this.addGroup = _this.addGroup.bind(_this);
    _this.addTeamToGroup = _this.addTeamToGroup.bind(_this);
    _this.createSweepstake = _this.createSweepstake.bind(_this);
    _this.removeTeamFromGroup = _this.removeTeamFromGroup.bind(_this);
    _this.deleteGroup = _this.deleteGroup.bind(_this);
    _this.onSelectGroup = _this.onSelectGroup.bind(_this);
    return _this;
  }

  _createClass(SweepstakeForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$competitions = this.props.competitions,
          competitions = _props$competitions.competitions,
          selectedCompetitionID = _props$competitions.selectedCompetitionID,
          teams = _props$competitions.teams;

      if (competitions[selectedCompetitionID] == null) {
        this.props.fetchCompetition(selectedCompetitionID);
      }
      if (teams[selectedCompetitionID] == null) {
        this.props.fetchTeams(selectedCompetitionID);
      }
    }

    //Delete a Group

  }, {
    key: 'deleteGroup',
    value: function deleteGroup(index) {
      var updated = Object.assign({}, this.state);
      var groups = updated['groups'];
      delete groups[index];
      updated['groups'] = groups;
      return updated;
    }

    //Updates A Text Field In State With event.id and event.value as key/value

  }, {
    key: 'updateField',
    value: function updateField(event) {
      var updated = Object.assign({}, this.state);
      updated[event.target.id] = event.target.value;
      this.setState(updated);
    }

    //Adds an Empty Group With Key of Group Index

  }, {
    key: 'addGroup',
    value: function addGroup() {
      var updated = Object.assign({}, this.state);
      var groups = updated['groups'];
      var numGroups = updated['numGroups'];
      var selectedGroup = this.state.selectedGroup;
      groups[numGroups] = [];
      selectedGroup += 1;
      numGroups += 1;
      this.setState({
        groups: groups,
        numGroups: numGroups,
        selectedGroup: selectedGroup
      });
    }

    //Remove a Team From a Group

  }, {
    key: 'removeTeamFromGroup',
    value: function removeTeamFromGroup(index) {
      var updated = this.state.groups;
      var selectedGroup = this.state.selectedGroup;
      var teams = updated[selectedGroup];
      teams.splice(index, 1);
      updated[selectedGroup] = teams;
      return updated;
    }

    //Add Team to a Group

  }, {
    key: 'addTeamToGroup',
    value: function addTeamToGroup(team) {
      var updated = Object.assign({}, this.state);
      var groups = updated['groups'];
      var selectedGroup = this.state.selectedGroup;
      if (groups[selectedGroup] == null) {
        alert('Select A Group!');
        return;
      }
      groups[selectedGroup].push(team);
      updated['groups'] = groups;
      this.setState({
        groups: groups
      });
    }

    //Send All Relevant Data to Actions

  }, {
    key: 'createSweepstake',
    value: function createSweepstake() {
      var sweepstake = {
        owner: this.props.currentUser._id,
        groups: this.state.groups,
        members: this.state.members,
        name: this.state.name,
        entryFee: this.state.entryFee,
        description: this.state.description,
        joinExpiryDate: this.state.joinExpiryDate
      };
      this.props.createSweepstake(sweepstake);
    }

    //Select A Group

  }, {
    key: 'onSelectGroup',
    value: function onSelectGroup(groupKey) {
      this.setState({
        selectedGroup: groupKey
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _props$competitions2 = this.props.competitions,
          competitions = _props$competitions2.competitions,
          teams = _props$competitions2.teams,
          selectedCompetitionID = _props$competitions2.selectedCompetitionID;

      var availableTeams = teams[selectedCompetitionID] == null ? [] : teams[selectedCompetitionID];
      var caption = competitions[selectedCompetitionID] == null ? 'No Header' : _react2.default.createElement(
        'span',
        null,
        competitions[selectedCompetitionID]['caption']
      );

      return _react2.default.createElement(
        _core.Grid,
        { item: true, xs: 10 },
        _react2.default.createElement(
          _core.Paper,
          null,
          _react2.default.createElement(_presentation.Caption, { caption: caption }),
          _react2.default.createElement(
            _core.Grid,
            { container: true, direction: 'column', justify: 'flex-start', className: classes.nameStyle },
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: true, className: classes.textEntryStyle },
              _react2.default.createElement(_TextField2.default, {
                required: true,
                id: 'name',
                label: 'Sweepstake Name',
                value: this.state.name,
                margin: 'normal',
                onChange: this.updateField
              })
            ),
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: true, className: classes.textEntryStyle },
              _react2.default.createElement(_TextField2.default, {
                fullWidth: true,
                required: true,
                id: 'description',
                label: 'Description',
                value: this.state.description,
                margin: 'normal',
                onChange: this.updateField
              })
            ),
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: true, className: classes.textEntryStyle },
              _react2.default.createElement(_TextField2.default, {
                required: true,
                id: 'entryFee',
                label: 'Entry Fee',
                type: 'number',
                value: this.state.entryFee,
                margin: 'normal',
                onChange: this.updateField
              })
            ),
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: true, className: classes.dateTimeStyle },
              _react2.default.createElement(_TextField2.default, {
                onChange: this.updateField,
                id: 'joinExpiryDate',
                label: 'Closing Date and Time',
                type: 'datetime-local',
                defaultValue: '2018-06-14T12:00'
              })
            ),
            _react2.default.createElement(
              _core.Grid,
              { container: true },
              _react2.default.createElement(
                _core.Grid,
                { item: true, xs: 5 },
                _react2.default.createElement(
                  _core.Grid,
                  { container: true, justify: 'center', alignContent: 'center' },
                  _react2.default.createElement(
                    _core.Grid,
                    { item: true, style: { marginTop: 10 } },
                    _react2.default.createElement(
                      _core.Typography,
                      { variant: 'display1', gutterBottom: true, align: 'center' },
                      'Available Teams'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _core.Grid,
                { item: true, xs: 7 },
                _react2.default.createElement(
                  _core.Grid,
                  { container: true, justify: 'center' },
                  _react2.default.createElement(
                    _core.Grid,
                    { item: true, style: { margin: 10 } },
                    _react2.default.createElement(
                      _IconButton2.default,
                      { onClick: this.addGroup, style: { label: 'Add' }, 'aria-label': 'Add Group' },
                      'Add Group',
                      _react2.default.createElement(_Add2.default, {
                        onClick: this.addGroup
                      })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _core.Grid,
            { container: true },
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: 5 },
              _react2.default.createElement(_presentation.CreateFormTeams, {
                availableTeams: availableTeams,
                addTeamToGroup: this.addTeamToGroup
              })
            ),
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: 7 },
              _react2.default.createElement(_presentation.CreateFormGroups, {
                isEditing: true,
                groups: this.state.groups,
                selectedGroup: this.state.selectedGroup,
                deleteGroup: this.deleteGroup,
                onSelectGroup: this.onSelectGroup,
                removeTeamFromGroup: this.removeTeamFromGroup
              })
            )
          ),
          _react2.default.createElement(
            _core.Grid,
            { container: true, justify: 'center', direction: 'row' },
            _react2.default.createElement(
              _core.Grid,
              { item: true, className: classes.saveButtonStyle },
              _react2.default.createElement(
                _Button2.default,
                {
                  variant: 'raised',
                  color: 'primary',
                  onClick: this.createSweepstake
                },
                'Create Sweepstake'
              )
            )
          )
        )
      );
    }
  }]);

  return SweepstakeForm;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    currentUser: state.auth.user,
    competitions: state.competitions
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    createSweepstake: function createSweepstake(sweepstake) {
      return dispatch(_actions.sweepstakeActions.createSweepstake(sweepstake));
    },
    fetchTeams: function fetchTeams(id) {
      return dispatch(_actions.competitionActions.fetchTeams(id));
    },
    fetchCompetition: function fetchCompetition(id) {
      return dispatch(_actions.competitionActions.fetchCompetition(id));
    }
  };
};

exports.default = (0, _compose2.default)((0, _core.withStyles)(styles), (0, _reactRedux.connect)(stateToProps, dispatchToProps))(SweepstakeForm);

/***/ }),

/***/ "./src/components/containers/Sweepstakes.js":
/*!**************************************************!*\
  !*** ./src/components/containers/Sweepstakes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core/ */ "./node_modules/@material-ui/core/index.es.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");

var _presentation = __webpack_require__(/*! ../presentation */ "./src/components/presentation/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sweepstakes = function (_Component) {
  _inherits(Sweepstakes, _Component);

  function Sweepstakes() {
    _classCallCheck(this, Sweepstakes);

    var _this = _possibleConstructorReturn(this, (Sweepstakes.__proto__ || Object.getPrototypeOf(Sweepstakes)).call(this));

    _this.joinSweepstake = _this.joinSweepstake.bind(_this);
    _this.viewSweepstake = _this.viewSweepstake.bind(_this);
    _this.deleteSweepstake = _this.deleteSweepstake.bind(_this);
    _this.generateSweepstake = _this.generateSweepstake.bind(_this);
    return _this;
  }

  _createClass(Sweepstakes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.sweepstake.sweepstakes.length === 0) {
        this.props.fetchSweepstakes();
      }
    }
  }, {
    key: 'joinSweepstake',
    value: function joinSweepstake(sweepstake, index) {
      var currentUser = this.props.currentUser;

      console.log('CurrentUser: ' + JSON.stringify(currentUser));
      var profileDetails = {
        _id: currentUser._id,
        username: currentUser.username
      };
      sweepstake.members.push(profileDetails); //TODO Move to Redux?
      this.props.joinSweepstake(sweepstake._id, sweepstake.members, index);
    }
  }, {
    key: 'viewSweepstake',
    value: function viewSweepstake(sweepstake) {
      this.props.sweepstakeSelected(sweepstake);
    }
  }, {
    key: 'deleteSweepstake',
    value: function deleteSweepstake(id, index) {
      this.props.deleteSweepstake(id, index);
    }
  }, {
    key: 'generateSweepstake',
    value: function generateSweepstake(sweepstake, index) {
      this.props.generateSweepstake(sweepstake, index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          currentUser = _props.currentUser;
      var sweepstakes = this.props.sweepstake.sweepstakes;


      var content = sweepstakes.length > 0 ? sweepstakes.map(function (sweepstake, index) {
        return _react2.default.createElement(
          _core.Grid,
          { key: index,
            item: true, xs: 6
          },
          _react2.default.createElement(_presentation.Sweepstake, {
            user: currentUser,
            sweepstake: sweepstake,
            'delete': function _delete() {
              return _this2.deleteSweepstake(sweepstake._id, index);
            },
            generate: function generate() {
              return _this2.generateSweepstake(sweepstake, index);
            },
            view: function view() {
              return _this2.viewSweepstake(sweepstake);
            },
            join: function join() {
              return _this2.joinSweepstake(sweepstake, index);
            }
          })
        );
      }) : _react2.default.createElement(
        _core.Grid,
        { container: true, justify: 'center' },
        _react2.default.createElement(
          _core.Grid,
          { item: true, xs: true, style: { textAlign: 'center', marginTop: 50 } },
          _react2.default.createElement(
            _core.Typography,
            { variant: 'display2' },
            'No Sweepstakes!!!!'
          )
        )
      );

      return _react2.default.createElement(
        _core.Grid,
        { container: true },
        content
      );
    }
  }]);

  return Sweepstakes;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    sweepstake: state.sweepstake,
    currentUser: state.auth.user
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    fetchSweepstakes: function fetchSweepstakes() {
      return dispatch(_actions.sweepstakeActions.fetchSweepstakes());
    },
    deleteSweepstake: function deleteSweepstake(id, index) {
      return dispatch(_actions.sweepstakeActions.deleteSweepstake(id, index));
    },
    generateSweepstake: function generateSweepstake(sweepstake, index) {
      return dispatch(_actions.sweepstakeActions.generateSweepstake(sweepstake, index));
    },
    sweepstakeSelected: function sweepstakeSelected(sweepstake) {
      return dispatch(_actions.sweepstakeActions.sweepstakeSelected(sweepstake));
    },
    joinSweepstake: function joinSweepstake(id, members, index) {
      return dispatch(_actions.sweepstakeActions.addMember(id, members, index));
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Sweepstakes);

/***/ }),

/***/ "./src/components/containers/index.js":
/*!********************************************!*\
  !*** ./src/components/containers/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sweepstake = exports.Sidebar = exports.Profile = exports.PrivateRoute = exports.RegisterForm = exports.LoginForm = exports.Sweepstakes = exports.SweepstakeForm = undefined;

var _SweepstakeForm = __webpack_require__(/*! ./SweepstakeForm */ "./src/components/containers/SweepstakeForm.js");

var _SweepstakeForm2 = _interopRequireDefault(_SweepstakeForm);

var _Sweepstakes = __webpack_require__(/*! ./Sweepstakes */ "./src/components/containers/Sweepstakes.js");

var _Sweepstakes2 = _interopRequireDefault(_Sweepstakes);

var _Sweepstake = __webpack_require__(/*! ./Sweepstake */ "./src/components/containers/Sweepstake.js");

var _Sweepstake2 = _interopRequireDefault(_Sweepstake);

var _LoginForm = __webpack_require__(/*! ./LoginForm */ "./src/components/containers/LoginForm.js");

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _RegisterForm = __webpack_require__(/*! ./RegisterForm */ "./src/components/containers/RegisterForm.js");

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _PrivateRoute = __webpack_require__(/*! ./PrivateRoute */ "./src/components/containers/PrivateRoute.js");

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _Profile = __webpack_require__(/*! ./Profile */ "./src/components/containers/Profile.js");

var _Profile2 = _interopRequireDefault(_Profile);

var _Sidebar = __webpack_require__(/*! ./Sidebar */ "./src/components/containers/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SweepstakeForm = _SweepstakeForm2.default;
exports.Sweepstakes = _Sweepstakes2.default;
exports.LoginForm = _LoginForm2.default;
exports.RegisterForm = _RegisterForm2.default;
exports.PrivateRoute = _PrivateRoute2.default;
exports.Profile = _Profile2.default;
exports.Sidebar = _Sidebar2.default;
exports.Sweepstake = _Sweepstake2.default;

/***/ }),

/***/ "./src/components/layout/CreateSweepstake.js":
/*!***************************************************!*\
  !*** ./src/components/layout/CreateSweepstake.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "./node_modules/material-ui/styles/MuiThemeProvider.js");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  paperPadding: {
    marginTop: 20
  }
};

var CreateSweepstake = function (_Component) {
  _inherits(CreateSweepstake, _Component);

  function CreateSweepstake() {
    _classCallCheck(this, CreateSweepstake);

    return _possibleConstructorReturn(this, (CreateSweepstake.__proto__ || Object.getPrototypeOf(CreateSweepstake)).apply(this, arguments));
  }

  _createClass(CreateSweepstake, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          _containers.Sidebar,
          null,
          _react2.default.createElement(
            _core.Grid,
            {
              className: classes.paperPadding,
              direction: 'row',
              justify: 'center',
              container: true },
            _react2.default.createElement(_containers.SweepstakeForm, null)
          )
        )
      );
    }
  }]);

  return CreateSweepstake;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(CreateSweepstake);

/***/ }),

/***/ "./src/components/layout/Dashboard.js":
/*!********************************************!*\
  !*** ./src/components/layout/Dashboard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "./node_modules/material-ui/styles/MuiThemeProvider.js");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          _containers.Sidebar,
          null,
          _react2.default.createElement(_containers.Sweepstakes, null)
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ "./src/components/layout/Login.js":
/*!****************************************!*\
  !*** ./src/components/layout/Login.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return _react2.default.createElement(
    _core.Grid,
    { container: true, justify: 'center' },
    _react2.default.createElement(
      _core.Grid,
      { item: true },
      _react2.default.createElement(_containers.LoginForm, null)
    )
  );
};

exports.default = Login;

/***/ }),

/***/ "./src/components/layout/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/components/layout/ProfilePage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "./node_modules/material-ui/styles/MuiThemeProvider.js");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfilePage = function (_Component) {
  _inherits(ProfilePage, _Component);

  function ProfilePage() {
    _classCallCheck(this, ProfilePage);

    return _possibleConstructorReturn(this, (ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).apply(this, arguments));
  }

  _createClass(ProfilePage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          _containers.Sidebar,
          null,
          _react2.default.createElement(_containers.Profile, null)
        )
      );
    }
  }]);

  return ProfilePage;
}(_react.Component);

exports.default = ProfilePage;

/***/ }),

/***/ "./src/components/layout/Register.js":
/*!*******************************************!*\
  !*** ./src/components/layout/Register.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Register = function Register() {
  return _react2.default.createElement(
    _core.Grid,
    { container: true, justify: 'center' },
    _react2.default.createElement(
      _core.Grid,
      { item: true },
      _react2.default.createElement(_containers.RegisterForm, null)
    )
  );
};

exports.default = Register;

/***/ }),

/***/ "./src/components/layout/ViewAllSweepstakes.js":
/*!*****************************************************!*\
  !*** ./src/components/layout/ViewAllSweepstakes.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "./node_modules/material-ui/styles/MuiThemeProvider.js");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewAllSweepstakes = function (_Component) {
  _inherits(ViewAllSweepstakes, _Component);

  function ViewAllSweepstakes() {
    _classCallCheck(this, ViewAllSweepstakes);

    return _possibleConstructorReturn(this, (ViewAllSweepstakes.__proto__ || Object.getPrototypeOf(ViewAllSweepstakes)).apply(this, arguments));
  }

  _createClass(ViewAllSweepstakes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          _containers.Sidebar,
          null,
          _react2.default.createElement(_containers.AllSweepstakes, null)
        )
      );
    }
  }]);

  return ViewAllSweepstakes;
}(_react.Component);

exports.default = ViewAllSweepstakes;

/***/ }),

/***/ "./src/components/layout/ViewSweepstake.js":
/*!*************************************************!*\
  !*** ./src/components/layout/ViewSweepstake.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _MuiThemeProvider = __webpack_require__(/*! material-ui/styles/MuiThemeProvider */ "./node_modules/material-ui/styles/MuiThemeProvider.js");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _containers = __webpack_require__(/*! ../containers */ "./src/components/containers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewSweepstake = function (_Component) {
  _inherits(ViewSweepstake, _Component);

  function ViewSweepstake() {
    _classCallCheck(this, ViewSweepstake);

    return _possibleConstructorReturn(this, (ViewSweepstake.__proto__ || Object.getPrototypeOf(ViewSweepstake)).apply(this, arguments));
  }

  _createClass(ViewSweepstake, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(
          _containers.Sidebar,
          null,
          _react2.default.createElement(_containers.Sweepstake, {
            id: this.props.match.params.id
          })
        )
      );
    }
  }]);

  return ViewSweepstake;
}(_react.Component);

exports.default = ViewSweepstake;

/***/ }),

/***/ "./src/components/layout/index.js":
/*!****************************************!*\
  !*** ./src/components/layout/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewSweepstake = exports.Register = exports.Login = exports.ViewAllSweepstakes = exports.CreateSweepstake = exports.ProfilePage = exports.Dashboard = undefined;

var _Dashboard = __webpack_require__(/*! ./Dashboard */ "./src/components/layout/Dashboard.js");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _ProfilePage = __webpack_require__(/*! ./ProfilePage */ "./src/components/layout/ProfilePage.js");

var _ProfilePage2 = _interopRequireDefault(_ProfilePage);

var _CreateSweepstake = __webpack_require__(/*! ./CreateSweepstake */ "./src/components/layout/CreateSweepstake.js");

var _CreateSweepstake2 = _interopRequireDefault(_CreateSweepstake);

var _ViewAllSweepstakes = __webpack_require__(/*! ./ViewAllSweepstakes */ "./src/components/layout/ViewAllSweepstakes.js");

var _ViewAllSweepstakes2 = _interopRequireDefault(_ViewAllSweepstakes);

var _Login = __webpack_require__(/*! ./Login */ "./src/components/layout/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(/*! ./Register */ "./src/components/layout/Register.js");

var _Register2 = _interopRequireDefault(_Register);

var _ViewSweepstake = __webpack_require__(/*! ./ViewSweepstake */ "./src/components/layout/ViewSweepstake.js");

var _ViewSweepstake2 = _interopRequireDefault(_ViewSweepstake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Dashboard = _Dashboard2.default;
exports.ProfilePage = _ProfilePage2.default;
exports.CreateSweepstake = _CreateSweepstake2.default;
exports.ViewAllSweepstakes = _ViewAllSweepstakes2.default;
exports.Login = _Login2.default;
exports.Register = _Register2.default;
exports.ViewSweepstake = _ViewSweepstake2.default;

/***/ }),

/***/ "./src/components/presentation/CreateSweepstakeForm/Caption.js":
/*!*********************************************************************!*\
  !*** ./src/components/presentation/CreateSweepstakeForm/Caption.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  captionStyle: {
    paddingTop: 20
  }
};

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption() {
    _classCallCheck(this, Caption);

    return _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).apply(this, arguments));
  }

  _createClass(Caption, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return _react2.default.createElement(
        _core.Grid,
        { container: true, direction: 'row', justify: 'center' },
        _react2.default.createElement(
          _core.Grid,
          { item: true, className: classes.captionStyle },
          _react2.default.createElement(
            _core.Typography,
            {
              align: 'center',
              variant: 'display1'
            },
            this.props.caption,
            _react2.default.createElement('hr', null)
          )
        )
      );
    }
  }]);

  return Caption;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(Caption);

/***/ }),

/***/ "./src/components/presentation/CreateSweepstakeForm/CreateFormGroupTable.js":
/*!**********************************************************************************!*\
  !*** ./src/components/presentation/CreateSweepstakeForm/CreateFormGroupTable.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _CreateFormGroups = __webpack_require__(/*! ./CreateFormGroups */ "./src/components/presentation/CreateSweepstakeForm/CreateFormGroups.js");

var _CreateFormGroups2 = _interopRequireDefault(_CreateFormGroups);

var _CreateFormTeams = __webpack_require__(/*! ./CreateFormTeams */ "./src/components/presentation/CreateSweepstakeForm/CreateFormTeams.js");

var _CreateFormTeams2 = _interopRequireDefault(_CreateFormTeams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateFormGroupTable = function (_Component) {
  _inherits(CreateFormGroupTable, _Component);

  function CreateFormGroupTable() {
    _classCallCheck(this, CreateFormGroupTable);

    return _possibleConstructorReturn(this, (CreateFormGroupTable.__proto__ || Object.getPrototypeOf(CreateFormGroupTable)).apply(this, arguments));
  }

  _createClass(CreateFormGroupTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          availableTeams = _props.availableTeams,
          selectedGroup = _props.selectedGroup,
          groups = _props.groups;


      return _react2.default.createElement(
        _core.Grid,
        { container: true },
        _react2.default.createElement(_core.Grid, { item: true, xs: 5 }),
        _react2.default.createElement(_core.Grid, { item: true, xs: 1 }),
        _react2.default.createElement(_core.Grid, { item: true, xs: 6 })
      );
    }
  }]);

  return CreateFormGroupTable;
}(_react.Component);

exports.default = CreateFormGroupTable;

/***/ }),

/***/ "./src/components/presentation/CreateSweepstakeForm/CreateFormGroups.js":
/*!******************************************************************************!*\
  !*** ./src/components/presentation/CreateSweepstakeForm/CreateFormGroups.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _Delete = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");

var _Delete2 = _interopRequireDefault(_Delete);

var _IconButton = __webpack_require__(/*! material-ui/IconButton */ "./node_modules/material-ui/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  groupBox: {
    marginRight: 10
  },
  nameDisplay: {
    textAlign: 'center',
    marginTop: 15,
    padding: 15,
    backgroundColor: '#f9fbff'
  },
  groupName: {
    textAlign: 'center',
    margin: 5
  },
  imageStyle: {
    flex: 1,
    width: 55,
    height: 30,
    resizeMode: 'contain'
  }
};

var CreateFormGroups = function (_Component) {
  _inherits(CreateFormGroups, _Component);

  function CreateFormGroups() {
    _classCallCheck(this, CreateFormGroups);

    var _this = _possibleConstructorReturn(this, (CreateFormGroups.__proto__ || Object.getPrototypeOf(CreateFormGroups)).call(this));

    _this.removeTeamFromGroup = _this.removeTeamFromGroup.bind(_this);
    return _this;
  }

  _createClass(CreateFormGroups, [{
    key: 'removeTeamFromGroup',
    value: function removeTeamFromGroup(index) {
      if (this.props.isEditing) {
        this.props.removeTeamFromGroup(index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          groups = _props.groups,
          selectedGroup = _props.selectedGroup,
          classes = _props.classes,
          isEditing = _props.isEditing;


      return _react2.default.createElement(
        _core.Grid,
        { container: true, alignItems: 'center', justify: 'center' },
        _react2.default.createElement(
          _core.Grid,
          { item: true, xs: true },
          _react2.default.createElement(
            _core.Grid,
            { container: true, justify: 'space-between' },
            Object.keys(groups).map(function (groupKey, index) {
              var paperElevation = selectedGroup == groupKey ? 15 : 1;
              var backgroundColor = selectedGroup == groupKey ? '#efefefef' : '#ffffffff';
              var teams = groups[groupKey];
              var content = teams.map(function (team, index) {
                return _react2.default.createElement(
                  _core.Grid,
                  { item: true, key: index },
                  _react2.default.createElement(
                    _core.Grid,
                    { container: true, justify: 'center' },
                    _react2.default.createElement(
                      _core.Grid,
                      { item: true, xs: 12 },
                      _react2.default.createElement(
                        _core.Paper,
                        { className: classes.nameDisplay },
                        _react2.default.createElement(
                          _core.Grid,
                          { container: true },
                          _react2.default.createElement(
                            _core.Grid,
                            { item: true, xs: 8, onClick: function onClick() {
                                return _this2.removeTeamFromGroup(index);
                              } },
                            _react2.default.createElement(
                              _core.Typography,
                              { style: { marginTop: 10 }, variant: 'display1' },
                              team.name
                            )
                          ),
                          _react2.default.createElement(
                            _core.Grid,
                            { item: true, xs: 4 },
                            _react2.default.createElement('img', { style: { borderImageWidth: 2, border: 'solid', borderImageOutset: 1 }, className: classes.imageStyle, src: team.crestUrl })
                          )
                        )
                      )
                    )
                  )
                );
              });
              return _react2.default.createElement(
                _core.Grid,
                { className: classes.groupBox, key: index, item: true, xs: true },
                _react2.default.createElement(
                  _core.Paper,
                  { style: { backgroundColor: backgroundColor }, elevation: paperElevation, onClick: function onClick() {
                      return _this2.props.onSelectGroup(groupKey);
                    } },
                  _react2.default.createElement(
                    _core.Grid,
                    { container: true, justify: 'center' },
                    _react2.default.createElement(
                      _core.Grid,
                      { item: true, xs: true, style: { textAlign: 'center' } },
                      _react2.default.createElement(
                        _core.Typography,
                        { className: classes.groupName, variant: 'display1', gutterBottom: true, align: 'center' },
                        'Group ',
                        index + 1,
                        isEditing ? _react2.default.createElement(
                          _IconButton2.default,
                          { style: { marginLeft: 20 } },
                          _react2.default.createElement(_Delete2.default, { onClick: function onClick() {
                              return _this2.props.deleteGroup(groupKey);
                            } })
                        ) : null
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _core.Grid,
                    { container: true },
                    _react2.default.createElement(
                      _core.Grid,
                      { item: true, xs: true },
                      content
                    )
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return CreateFormGroups;
}(_react.Component);

exports.default = (0, _withStyles2.default)(styles)(CreateFormGroups);

/***/ }),

/***/ "./src/components/presentation/CreateSweepstakeForm/CreateFormTeams.js":
/*!*****************************************************************************!*\
  !*** ./src/components/presentation/CreateSweepstakeForm/CreateFormTeams.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _reactImageResizer = __webpack_require__(/*! react-image-resizer */ "./node_modules/react-image-resizer/lib/index.js");

var _reactImageResizer2 = _interopRequireDefault(_reactImageResizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  teamEntry: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    // backgroundColor:'red',
    textAlign: 'center'
  },
  imageStyle: {
    flex: 1,
    width: 75,
    height: 50,
    resizeMode: 'contain'
  },
  paperStyle: {
    backgroundColor: '#efefefef'
  }
};

var CreateFormTeams = function (_Component) {
  _inherits(CreateFormTeams, _Component);

  function CreateFormTeams() {
    _classCallCheck(this, CreateFormTeams);

    return _possibleConstructorReturn(this, (CreateFormTeams.__proto__ || Object.getPrototypeOf(CreateFormTeams)).apply(this, arguments));
  }

  _createClass(CreateFormTeams, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          availableTeams = _props.availableTeams,
          numGroups = _props.numGroups;


      var teamList = availableTeams.length === 0 ? _react2.default.createElement(
        'p',
        null,
        'No Teams Available!'
      ) : availableTeams.map(function (team, index) {
        return _react2.default.createElement(
          _core.Grid,
          { className: classes.teamEntry,
            xs: true,
            item: true,
            key: index },
          _react2.default.createElement(
            _core.Paper,
            { onClick: function onClick() {
                return _this2.props.addTeamToGroup(team);
              }, className: classes.paperStyle },
            _react2.default.createElement(
              _core.Typography,
              { variant: 'title' },
              team.name
            ),
            _react2.default.createElement('img', { src: team.crestUrl, className: classes.imageStyle })
          )
        );
      });

      return _react2.default.createElement(
        _core.Grid,
        { container: true, direction: 'column', className: classes.teamEntry },
        _react2.default.createElement(
          _core.Grid,
          { item: true, xs: true },
          _react2.default.createElement(
            _core.Grid,
            { container: true, justify: 'space-between' },
            teamList
          )
        )
      );
    }
  }]);

  return CreateFormTeams;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(CreateFormTeams);

/***/ }),

/***/ "./src/components/presentation/CreateSweepstakeForm/Participants.js":
/*!**************************************************************************!*\
  !*** ./src/components/presentation/CreateSweepstakeForm/Participants.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  paperDisplay: {
    margin: 10
  },
  formControl: {
    margin: 10,
    minWidth: 200,
    marginLeft: 30
  }
};

var Participants = function (_Component) {
  _inherits(Participants, _Component);

  function Participants() {
    _classCallCheck(this, Participants);

    return _possibleConstructorReturn(this, (Participants.__proto__ || Object.getPrototypeOf(Participants)).apply(this, arguments));
  }

  _createClass(Participants, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          members = _props.members,
          profiles = _props.profiles;


      var contents = members.map(function (profile, index) {
        return _react2.default.createElement(
          _core.Grid,
          { key: index, item: true, xs: 3 },
          _react2.default.createElement(
            _core.Grid,
            { container: true, justify: 'center' },
            _react2.default.createElement(
              _core.Grid,
              { item: true, xs: true },
              _react2.default.createElement(
                _core.Paper,
                { className: classes.paperDisplay, elevation: 10 },
                _react2.default.createElement(
                  _core.Grid,
                  { container: true, justify: 'center' },
                  _react2.default.createElement(
                    _core.Grid,
                    { item: true },
                    _react2.default.createElement(
                      'h4',
                      null,
                      profile.username
                    )
                  )
                )
              )
            )
          )
        );
      });

      var participants = this.props.profiles.length == 0 ? null : profiles.map(function (profile, index) {
        return _react2.default.createElement(
          _core.MenuItem,
          { key: index, value: profile },
          _react2.default.createElement(
            'span',
            null,
            profile.username
          )
        );
      });

      return _react2.default.createElement(
        _core.Grid,
        null,
        _react2.default.createElement(
          _core.Grid,
          { style: { marginBottom: 20 }, container: true, alignContent: 'center', justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { item: true, xs: true },
            _react2.default.createElement(
              _core.FormControl,
              { className: classes.formControl },
              _react2.default.createElement(
                _core.InputLabel,
                { htmlFor: 'age-simple' },
                'Participants'
              ),
              _react2.default.createElement(
                _core.Select,
                {
                  value: "Hello",
                  onChange: function onChange(event) {
                    return _this2.props.addMember(event);
                  }
                },
                participants
              )
            )
          )
        ),
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'space-between' },
          _react2.default.createElement(
            _core.Grid,
            { item: true, xs: true },
            _react2.default.createElement(
              _core.Paper,
              null,
              _react2.default.createElement(
                _core.Grid,
                { container: true, justify: 'flex-start' },
                contents
              )
            )
          )
        )
      );
    }
  }]);

  return Participants;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(Participants);

/***/ }),

/***/ "./src/components/presentation/Dashboard/DashboardCompetitions.js":
/*!************************************************************************!*\
  !*** ./src/components/presentation/Dashboard/DashboardCompetitions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};

var Competitions = function (_Component) {
  _inherits(Competitions, _Component);

  function Competitions() {
    _classCallCheck(this, Competitions);

    return _possibleConstructorReturn(this, (Competitions.__proto__ || Object.getPrototypeOf(Competitions)).apply(this, arguments));
  }

  _createClass(Competitions, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Competitions'
      );
    }
  }]);

  return Competitions;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(Competitions);

/***/ }),

/***/ "./src/components/presentation/LoginForm.js":
/*!**************************************************!*\
  !*** ./src/components/presentation/LoginForm.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _authActions = __webpack_require__(/*! ../../actions/authActions */ "./src/actions/authActions.js");

var _authActions2 = _interopRequireDefault(_authActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    card: {
      minWidth: 275,
      maxWidth: 400,
      margin: 'auto',
      marginTop: 100
    },
    header: {
      width: '100%',
      backgroundColor: '#3943B7'
    },
    title: {
      paddingLeft: 45,
      paddingRight: 45,
      paddingTop: 45,
      paddingBottom: 7,
      fontSize: 24,
      color: 'white',
      fontWeight: '300'
    },
    content: {
      paddingLeft: 45,
      paddingRight: 45
    },
    actions: {
      paddingLeft: 45,
      paddingRight: 45
    },
    button: {
      backgroundColor: '#3943B7',
      color: 'white'
    },
    footer: {
      marginTop: 30
    },
    poweredBy: {
      fontSize: 12,
      color: '#252C77',
      padding: 8,
      cursor: "pointer",
      "&:hover": {
        opacity: 0.83
      }
    }
  };
};

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      username: '',
      password: ''
    };

    _this.updateField = _this.updateField.bind(_this);
    _this.updateUsername = _this.updateUsername.bind(_this);
    _this.updatePassword = _this.updatePassword.bind(_this);
    _this.login = _this.login.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'updateField',
    value: function updateField(field, value) {
      this.setState(Object.assign({}, this.state, _defineProperty({}, field, value)));
    }
  }, {
    key: 'updateUsername',
    value: function updateUsername(e) {
      this.updateField('username', e.target.value);
    }
  }, {
    key: 'updatePassword',
    value: function updatePassword(e) {
      this.updateField('password', e.target.value);
    }
  }, {
    key: 'login',
    value: function login() {
      var _state = this.state,
          username = _state.username,
          password = _state.password;

      this.props.login(username, password);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.user) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }

      var classes = this.props.classes;
      var _state2 = this.state,
          username = _state2.username,
          password = _state2.password;

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card },
        _react2.default.createElement(
          'div',
          { className: classes.header },
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.title },
            'Welcome back!'
          )
        ),
        _react2.default.createElement(
          _CardContent2.default,
          { className: classes.content },
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { container: true, spacing: 8, alignItems: 'flex-end' },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12 },
                _react2.default.createElement(_TextField2.default, {
                  label: 'Username',
                  margin: 'normal',
                  fullWidth: true,
                  required: true,
                  onChange: this.updateUsername
                })
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { container: true, spacing: 8, alignItems: 'flex-end' },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12 },
                _react2.default.createElement(_TextField2.default, {
                  label: 'password',
                  margin: 'normal',
                  type: 'password',
                  fullWidth: true,
                  required: true,
                  onChange: this.updatePassword
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          _CardActions2.default,
          { className: classes.actions },
          _react2.default.createElement(
            _Grid2.default,
            { container: true, justify: 'center' },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 8, sm: 6 },
              _react2.default.createElement(
                _Button2.default,
                {
                  variant: 'raised',
                  className: classes.button,
                  fullWidth: true,
                  onClick: this.login },
                'Login'
              )
            )
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          {
            container: true,
            justify: 'center',
            className: classes.footer },
          _react2.default.createElement(
            _Grid2.default,
            { item: true },
            _react2.default.createElement(
              _Typography2.default,
              {
                className: classes.poweredBy,
                onClick: this.props.navigateToRegisterPage },
              'Still need to sign up?'
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(styles)(LoginForm);

/***/ }),

/***/ "./src/components/presentation/RegisterForm.js":
/*!*****************************************************!*\
  !*** ./src/components/presentation/RegisterForm.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _withStyles = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Card = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/CardHeader/index.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardActions = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");

var _TextField2 = _interopRequireDefault(_TextField);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _authActions = __webpack_require__(/*! ../../actions/authActions */ "./src/actions/authActions.js");

var _authActions2 = _interopRequireDefault(_authActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    card: {
      minWidth: 275,
      maxWidth: 400,
      margin: 'auto',
      marginTop: 100
    },
    header: {
      width: '100%',
      backgroundColor: '#3943B7'
    },
    title: {
      paddingLeft: 45,
      paddingRight: 45,
      paddingTop: 45,
      paddingBottom: 7,
      fontSize: 24,
      color: 'white',
      fontWeight: '300'
    },
    content: {
      paddingLeft: 45,
      paddingRight: 45
    },
    actions: {
      paddingLeft: 45,
      paddingRight: 45
    },
    button: {
      backgroundColor: '#3943B7',
      color: 'white'
    },
    footer: {
      marginTop: 30
    },
    poweredBy: {
      fontSize: 12,
      color: '#252C77',
      padding: 8,
      cursor: "pointer",
      "&:hover": {
        opacity: 0.83
      }
    }
  };
};

var RegisterForm = function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

    _this.state = {
      email: '',
      username: '',
      password: ''
    };

    _this.updateField = _this.updateField.bind(_this);
    _this.updateEmail = _this.updateEmail.bind(_this);
    _this.updateUsername = _this.updateUsername.bind(_this);
    _this.updatePassword = _this.updatePassword.bind(_this);
    _this.register = _this.register.bind(_this);
    return _this;
  }

  _createClass(RegisterForm, [{
    key: 'updateField',
    value: function updateField(field, value) {
      this.setState(Object.assign({}, this.state, _defineProperty({}, field, value)));
    }
  }, {
    key: 'updateEmail',
    value: function updateEmail(e) {
      this.updateField('email', e.target.value);
    }
  }, {
    key: 'updateUsername',
    value: function updateUsername(e) {
      this.updateField('username', e.target.value);
    }
  }, {
    key: 'updatePassword',
    value: function updatePassword(e) {
      this.updateField('password', e.target.value);
    }
  }, {
    key: 'register',
    value: function register() {
      this.props.register(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.user) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }

      var classes = this.props.classes;
      var _state = this.state,
          username = _state.username,
          password = _state.password;

      return _react2.default.createElement(
        _Card2.default,
        { className: classes.card },
        _react2.default.createElement(
          'div',
          { className: classes.header },
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.title },
            'Let\'s get the ball rolling...'
          )
        ),
        _react2.default.createElement(
          _CardContent2.default,
          { className: classes.content },
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { container: true, spacing: 8, alignItems: 'flex-end' },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12 },
                _react2.default.createElement(_TextField2.default, {
                  id: 'email',
                  label: 'Email',
                  margin: 'normal',
                  fullWidth: true,
                  required: true,
                  onChange: this.updateEmail
                })
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { container: true, spacing: 8, alignItems: 'flex-end' },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12 },
                _react2.default.createElement(_TextField2.default, {
                  label: 'Username',
                  margin: 'normal',
                  fullWidth: true,
                  required: true,
                  onChange: this.updateUsername
                })
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { container: true, spacing: 8, alignItems: 'flex-end' },
              _react2.default.createElement(
                _Grid2.default,
                { item: true, xs: 12 },
                _react2.default.createElement(_TextField2.default, {
                  label: 'password',
                  margin: 'normal',
                  type: 'password',
                  fullWidth: true,
                  required: true,
                  onChange: this.updatePassword
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          _CardActions2.default,
          { className: classes.actions },
          _react2.default.createElement(
            _Grid2.default,
            { container: true, justify: 'center' },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: 8, sm: 6 },
              _react2.default.createElement(
                _Button2.default,
                {
                  variant: 'raised',
                  className: classes.button,
                  fullWidth: true,
                  onClick: this.register },
                'Register'
              )
            )
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          {
            container: true,
            justify: 'center',
            className: classes.footer },
          _react2.default.createElement(
            _Grid2.default,
            { item: true },
            _react2.default.createElement(
              _Typography2.default,
              {
                className: classes.poweredBy,
                onClick: this.props.navigateToLoginPage },
              'Already a member?'
            )
          )
        )
      );
    }
  }]);

  return RegisterForm;
}(_react2.default.Component);

exports.default = (0, _withStyles2.default)(styles)(RegisterForm);

/***/ }),

/***/ "./src/components/presentation/SelectTeam.js":
/*!***************************************************!*\
  !*** ./src/components/presentation/SelectTeam.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Radio = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");

var _Radio2 = _interopRequireDefault(_Radio);

var _RadioGroup = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _FormControlLabel = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/FormControlLabel/index.js");

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _FormControl = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/FormControl/index.js");

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormLabel = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/FormLabel/index.js");

var _FormLabel2 = _interopRequireDefault(_FormLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectTeam = function (_Component) {
  _inherits(SelectTeam, _Component);

  function SelectTeam() {
    _classCallCheck(this, SelectTeam);

    var _this = _possibleConstructorReturn(this, (SelectTeam.__proto__ || Object.getPrototypeOf(SelectTeam)).call(this));

    _this.state = {
      selectedTeam: '',
      availableTeams: ['Ireland', 'France', 'Germany', 'Spain', 'Brazil']
    };
    return _this;
  }

  _createClass(SelectTeam, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        selectedTeam: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.state.availableTeams.map(function (team, index) {
        return _react2.default.createElement(_FormControlLabel2.default, { key: index, value: team, control: _react2.default.createElement(_Radio2.default, null), label: team });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _FormControl2.default,
          { component: 'fieldset' },
          _react2.default.createElement(
            _FormLabel2.default,
            { component: 'legend' },
            'Select Team'
          ),
          _react2.default.createElement(
            _RadioGroup2.default,
            {
              'aria-label': 'team',
              name: 'availableTeams',
              value: this.state.selectedTeam,
              onChange: this.handleChange.bind(this)
            },
            options
          )
        )
      );
    }
  }]);

  return SelectTeam;
}(_react.Component);

exports.default = SelectTeam;

/***/ }),

/***/ "./src/components/presentation/Sidebar.js":
/*!************************************************!*\
  !*** ./src/components/presentation/Sidebar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Drawer = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/Drawer/index.js");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _List = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _ListItem = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js");

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Home = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _AppRoutes = __webpack_require__(/*! ../../routes/AppRoutes */ "./src/routes/AppRoutes.js");

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      height: "100%",
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex'
    },
    title: {
      flex: 1
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
      position: 'relative',
      width: 240
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0 // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar
  };
};

var Sidebar = function Sidebar(props) {
  var classes = props.classes;


  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'absolute', className: classes.appBar },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          _Typography2.default,
          {
            className: classes.title,
            variant: 'title',
            color: 'inherit',
            noWrap: true },
          'Sweepstakes Machine'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            color: 'inherit',
            onClick: props.logout },
          'Logout'
        )
      )
    ),
    _react2.default.createElement(
      _Drawer2.default,
      {
        variant: 'permanent',
        classes: { paper: classes.drawerPaper } },
      _react2.default.createElement('div', { className: classes.toolbar }),
      _react2.default.createElement(
        _List2.default,
        null,
        _AppRoutes2.default.map(function (route, i) {
          return _react2.default.createElement(
            _ListItem2.default,
            {
              key: i,
              onClick: function onClick() {
                return props.navigateTo(route.path);
              },
              button: true },
            _react2.default.createElement(
              _ListItemIcon2.default,
              null,
              route.icon
            ),
            _react2.default.createElement(_ListItemText2.default, { primary: route.sidebarName })
          );
        })
      )
    ),
    _react2.default.createElement(
      'main',
      { className: classes.content },
      _react2.default.createElement('div', { className: classes.toolbar }),
      props.children
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(Sidebar);

/***/ }),

/***/ "./src/components/presentation/Sweepstake.js":
/*!***************************************************!*\
  !*** ./src/components/presentation/Sweepstake.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _ExpansionPanel = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/ExpansionPanel/index.js");

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _ExpansionPanelDetails = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/ExpansionPanelDetails/index.js");

var _ExpansionPanelDetails2 = _interopRequireDefault(_ExpansionPanelDetails);

var _ExpansionPanelSummary = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/ExpansionPanelSummary/index.js");

var _ExpansionPanelSummary2 = _interopRequireDefault(_ExpansionPanelSummary);

var _ExpansionPanelActions = __webpack_require__(/*! @material-ui/core/ExpansionPanelActions */ "./node_modules/@material-ui/core/ExpansionPanelActions/index.js");

var _ExpansionPanelActions2 = _interopRequireDefault(_ExpansionPanelActions);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _ExpandMore = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _Chip = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/Chip/index.js");

var _Chip2 = _interopRequireDefault(_Chip);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Divider = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");

var _Divider2 = _interopRequireDefault(_Divider);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  paper: {
    margin: 20,
    padding: 5
  },
  display: {
    margin: 10
  },
  header: {
    margin: 5
  },
  button: {
    margin: 'auto',
    display: 'block',
    textAlign: 'center'
  },
  buttonText: {
    textColor: 'white'
  }
};

var Sweepstake = function (_Component) {
  _inherits(Sweepstake, _Component);

  function Sweepstake() {
    _classCallCheck(this, Sweepstake);

    return _possibleConstructorReturn(this, (Sweepstake.__proto__ || Object.getPrototypeOf(Sweepstake)).apply(this, arguments));
  }

  _createClass(Sweepstake, [{
    key: 'isMember',
    value: function isMember(members, id) {
      for (var i = 0; i < members.length; i++) {
        if (members[i]._id == id) return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          sweepstake = _props.sweepstake,
          user = _props.user,
          classes = _props.classes;


      var joinButton = this.isMember(sweepstake.members, user._id) || sweepstake.active ? null : _react2.default.createElement(
        _core.Grid,
        { item: true, xs: true },
        _react2.default.createElement(
          _Button2.default,
          { variant: 'contained', color: 'primary', className: classes.button, onClick: this.props.join },
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.buttonText },
            'Join!'
          )
        )
      );

      var deleteButton = user._id != sweepstake.owner ? null : _react2.default.createElement(
        _core.Grid,
        { item: true, xs: true },
        _react2.default.createElement(
          _Button2.default,
          { variant: 'contained', color: 'secondary', className: classes.button, onClick: this.props.delete },
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.buttonText },
            'Delete'
          )
        )
      );

      var generateButton = sweepstake.active || user._id != sweepstake.owner || sweepstake.members.length == 0 ? null : _react2.default.createElement(
        _core.Grid,
        { item: true, xs: true },
        _react2.default.createElement(
          _Button2.default,
          { variant: 'contained', color: 'primary', className: classes.button, onClick: this.props.generate },
          _react2.default.createElement(
            _Typography2.default,
            { className: classes.buttonText },
            'Generate'
          )
        )
      );

      var pot = sweepstake.entryFee * sweepstake.members.length;

      var active = sweepstake.active ? _react2.default.createElement(
        'span',
        null,
        'Closed'
      ) : _react2.default.createElement(
        'span',
        null,
        'Open'
      );

      return _react2.default.createElement(
        _core.Paper,
        { className: classes.paper, elevation: 3 },
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { item: true, className: classes.header },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display1' },
              sweepstake.name,
              ' ( ',
              active,
              ' )'
            )
          )
        ),
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { className: classes.display, item: true, xs: true },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline' },
              'Entry: \u20AC ',
              sweepstake.entryFee
            )
          ),
          _react2.default.createElement(
            _core.Grid,
            { className: classes.display, item: true, xs: true },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline' },
              'Members: ',
              sweepstake.members.length
            )
          )
        ),
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { className: classes.display, item: true, xs: true },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline' },
              'Pot: \u20AC ',
              pot
            )
          ),
          _react2.default.createElement(
            _core.Grid,
            { className: classes.display, item: true, xs: true },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline' },
              'Closing Date: ',
              sweepstake.joinExpiryDate
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          _core.Grid,
          { container: true, justify: 'center' },
          _react2.default.createElement(
            _core.Grid,
            { item: true, xs: true },
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.props.view, variant: 'outlined', color: 'primary', className: classes.button },
              _react2.default.createElement(
                _Typography2.default,
                { className: classes.buttonText },
                'View More'
              )
            )
          ),
          joinButton,
          generateButton,
          deleteButton
        )
      );
    }
  }]);

  return Sweepstake;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(Sweepstake);

/***/ }),

/***/ "./src/components/presentation/ViewSweepstake/AssignedTeams.js":
/*!*********************************************************************!*\
  !*** ./src/components/presentation/ViewSweepstake/AssignedTeams.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  entryStyle: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#efefef'
  },
  imageStyle: {
    flex: 1,
    width: 75,
    height: 50,
    resizeMode: 'contain'
  },
  usernameStyle: {
    textAlign: 'left',
    margin: 'auto'
  },
  parentPaperStyle: {
    backgroundColor: '#ffffff'
  }
};

var AssignedTeams = function (_Component) {
  _inherits(AssignedTeams, _Component);

  function AssignedTeams() {
    _classCallCheck(this, AssignedTeams);

    return _possibleConstructorReturn(this, (AssignedTeams.__proto__ || Object.getPrototypeOf(AssignedTeams)).apply(this, arguments));
  }

  _createClass(AssignedTeams, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          sweepstake = _props.sweepstake;


      var sweepstakeTable = sweepstake.map(function (user, index) {
        var teams = user.assignedTeams.map(function (team, index) {
          return _react2.default.createElement(
            _core.Grid,
            { key: index, item: true, xs: true },
            _react2.default.createElement(
              _core.Typography,
              { variant: 'title' },
              team.name
            ),
            _react2.default.createElement('img', { src: team.crestUrl, className: classes.imageStyle })
          );
        });
        return _react2.default.createElement(
          _core.Paper,
          { key: index, className: classes.entryStyle },
          _react2.default.createElement(
            _core.Grid,
            { key: index, container: true },
            _react2.default.createElement(
              _core.Grid,
              { key: index, item: true, xs: true },
              _react2.default.createElement(
                _core.Typography,
                { className: classes.usernameStyle, variant: 'headline' },
                user.user.username
              )
            ),
            teams
          )
        );
      });

      return _react2.default.createElement(
        _core.Grid,
        { container: true },
        _react2.default.createElement(
          _core.Grid,
          { item: true, xs: true },
          _react2.default.createElement(
            _core.Paper,
            { className: classes.parentPaperStyle },
            sweepstakeTable
          )
        )
      );
    }
  }]);

  return AssignedTeams;
}(_react.Component);

exports.default = (0, _core.withStyles)(styles)(AssignedTeams);

/***/ }),

/***/ "./src/components/presentation/index.js":
/*!**********************************************!*\
  !*** ./src/components/presentation/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignedTeams = exports.DashboardCompetitions = exports.Participants = exports.Caption = exports.CreateFormTeams = exports.CreateFormGroups = exports.CreateFormGroupTable = exports.RegisterForm = exports.LoginForm = exports.Sweepstake = exports.SelectTeam = exports.Sidebar = undefined;

var _Sidebar = __webpack_require__(/*! ./Sidebar */ "./src/components/presentation/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _SelectTeam = __webpack_require__(/*! ./SelectTeam */ "./src/components/presentation/SelectTeam.js");

var _SelectTeam2 = _interopRequireDefault(_SelectTeam);

var _Sweepstake = __webpack_require__(/*! ./Sweepstake */ "./src/components/presentation/Sweepstake.js");

var _Sweepstake2 = _interopRequireDefault(_Sweepstake);

var _LoginForm = __webpack_require__(/*! ./LoginForm */ "./src/components/presentation/LoginForm.js");

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _RegisterForm = __webpack_require__(/*! ./RegisterForm */ "./src/components/presentation/RegisterForm.js");

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _CreateFormGroupTable = __webpack_require__(/*! ./CreateSweepstakeForm/CreateFormGroupTable */ "./src/components/presentation/CreateSweepstakeForm/CreateFormGroupTable.js");

var _CreateFormGroupTable2 = _interopRequireDefault(_CreateFormGroupTable);

var _CreateFormGroups = __webpack_require__(/*! ./CreateSweepstakeForm/CreateFormGroups */ "./src/components/presentation/CreateSweepstakeForm/CreateFormGroups.js");

var _CreateFormGroups2 = _interopRequireDefault(_CreateFormGroups);

var _CreateFormTeams = __webpack_require__(/*! ./CreateSweepstakeForm/CreateFormTeams */ "./src/components/presentation/CreateSweepstakeForm/CreateFormTeams.js");

var _CreateFormTeams2 = _interopRequireDefault(_CreateFormTeams);

var _Participants = __webpack_require__(/*! ./CreateSweepstakeForm/Participants */ "./src/components/presentation/CreateSweepstakeForm/Participants.js");

var _Participants2 = _interopRequireDefault(_Participants);

var _Caption = __webpack_require__(/*! ./CreateSweepstakeForm/Caption */ "./src/components/presentation/CreateSweepstakeForm/Caption.js");

var _Caption2 = _interopRequireDefault(_Caption);

var _DashboardCompetitions = __webpack_require__(/*! ./Dashboard/DashboardCompetitions */ "./src/components/presentation/Dashboard/DashboardCompetitions.js");

var _DashboardCompetitions2 = _interopRequireDefault(_DashboardCompetitions);

var _AssignedTeams = __webpack_require__(/*! ./ViewSweepstake/AssignedTeams */ "./src/components/presentation/ViewSweepstake/AssignedTeams.js");

var _AssignedTeams2 = _interopRequireDefault(_AssignedTeams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sidebar = _Sidebar2.default;
exports.SelectTeam = _SelectTeam2.default;
exports.Sweepstake = _Sweepstake2.default;
exports.LoginForm = _LoginForm2.default;
exports.RegisterForm = _RegisterForm2.default;
exports.CreateFormGroupTable = _CreateFormGroupTable2.default;
exports.CreateFormGroups = _CreateFormGroups2.default;
exports.CreateFormTeams = _CreateFormTeams2.default;
exports.Caption = _Caption2.default;
exports.Participants = _Participants2.default;
exports.DashboardCompetitions = _DashboardCompetitions2.default;
exports.AssignedTeams = _AssignedTeams2.default;

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LOGIN_REQUEST$LOGIN_;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_LOGIN_REQUEST$LOGIN_ = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  USERS_RECEIVED: 'USERS_RECEIVED',
  USER_CREATED: 'USER_CREATED',
  USER_LOGGED_IN: 'USER_LOGGED_IN',
  CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
  FETCHING_PROFILE: 'FETCHING_PROFILE',

  CREATING_SWEEPSTAKE: 'CREATING_SWEEPSTAKE',
  SWEEPSTAKE_CREATED: 'SWEEPSTAKE_CREATED',
  FETCHING_SWEEPSTAKES: 'FETCHING_SWEEPSTAKES',
  SWEEPSTAKES_RECEIVED: 'SWEEPSTAKES_RECEIVED',
  FETCHING_SWEEPSTAKE: 'FETCHING_SWEEPSTAKE',
  SWEEPSTAKE_SELECTED: 'SWEEPSTAKE_SELECTED',
  SWEEPSTAKE_RECEIVED: 'SWEEPSTAKE_RECEIVED',
  SWEEPSTAKE_DELETED: 'SWEEPSTAKE_DELETED',
  GENERATING_SWEEPSTAKE: 'GENERATING_SWEEPSTAKE',
  SWEEPSTAKE_GENERATED: 'SWEEPSTAKE_GENERATED',

  FETCHING_USERS: 'FETCHING_USERS'
}, _defineProperty(_LOGIN_REQUEST$LOGIN_, 'USERS_RECEIVED', 'USERS_RECEIVED'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'FETCHING_COMPETITION', 'FETCHING_COMPETITION'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'FETCHED_COMPETITION', 'FETCHED_COMPETITION'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'ERROR_FETCHING_COMPETITION', 'ERROR_FETCHING_COMPETITION'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'FETCHING_TEAMS', 'FETCHING_TEAMS'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'FETCHED_TEAMS', 'FETCHED_TEAMS'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'ERROR_FETCHING_TEAMS', 'ERROR_FETCHING_TEAMS'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'FAILED_ADD_MEMBER', 'FAILED_ADD_MEMBER'), _defineProperty(_LOGIN_REQUEST$LOGIN_, 'MEMBER_ADDED', 'MEMBER_ADDED'), _LOGIN_REQUEST$LOGIN_);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _connectedReactRouter = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reducers = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

var _layout = __webpack_require__(/*! ./components/layout */ "./src/components/layout/index.js");

var layouts = _interopRequireWildcard(_layout);

var _containers = __webpack_require__(/*! ./components/containers */ "./src/components/containers/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

var store = (0, _redux.createStore)((0, _connectedReactRouter.connectRouter)(history)((0, _redux.combineReducers)(_reducers2.default)), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default, (0, _connectedReactRouter.routerMiddleware)(history))));

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: store },
	_react2.default.createElement(
		_connectedReactRouter.ConnectedRouter,
		{ history: history },
		_react2.default.createElement(
			_reactRouterDom.Switch,
			null,
			_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: layouts.Login }),
			_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: layouts.Register }),
			_react2.default.createElement(_containers.PrivateRoute, { exact: true, path: '/', component: layouts.Dashboard }),
			_react2.default.createElement(_containers.PrivateRoute, { exact: true, path: '/profile', component: layouts.ProfilePage }),
			_react2.default.createElement(_containers.PrivateRoute, { exact: true, path: '/create', component: layouts.CreateSweepstake }),
			_react2.default.createElement(_containers.PrivateRoute, { exact: true, path: '/sweepstakes', component: layouts.ViewAllSweepstakes }),
			_react2.default.createElement(_containers.PrivateRoute, { exact: true, path: '/randomizer', component: layouts.RandomAssigner }),
			_react2.default.createElement(_containers.PrivateRoute, { path: '/sweepstake/:id', component: layouts.ViewSweepstake })
		)
	)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/authReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/authReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

var _jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id_token = localStorage.getItem('id_token');
var initialUser = id_token ? (0, _jwtDecode2.default)(id_token) : null;

var initialState = {
	pending: false,
	user: initialUser,
	error: null
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _constants2.default.LOGIN_REQUEST:
		case _constants2.default.REGISTER_REQUEST:
			return {
				pending: true,
				user: null,
				error: null
			};
		case _constants2.default.LOGIN_SUCCESS:
		case _constants2.default.REGISTER_SUCCESS:
			return _extends({}, state, {
				pending: false,
				user: action.payload
			});
		case _constants2.default.LOGIN_FAILURE:
		case _constants2.default.REGISTER_FAILURE:
			return _extends({}, state, {
				pending: false,
				error: action.error
			});
		case _constants2.default.LOGOUT_SUCCESS:
			return {
				pending: false,
				user: null,
				error: null
			};
		default:
			return state;
	}
};

/***/ }),

/***/ "./src/reducers/competitionsReducer.js":
/*!*********************************************!*\
  !*** ./src/reducers/competitionsReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  competitions: {},
  fixtures: {},
  teams: {},
  selectedCompetitionID: 467
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var updated = Object.assign({}, state);

  switch (action.type) {

    case _constants2.default.FETCHED_COMPETITION:
      var fetchedCompetition = action.data;
      var competitionsMap = updated['competitions'];
      var id = fetchedCompetition['id'];
      competitionsMap[id] = fetchedCompetition;
      updated['competitions'] = competitionsMap;
      updated['selectedCompetitionID'] = id;
      return updated;

    case _constants2.default.FETCHING_COMPETITION:
      return updated;

    case _constants2.default.ERROR_FETCHING_COMPETITION:
      return updated;

    case _constants2.default.FETCHED_TEAMS:
      var fetchedTeams = action.data.teams;
      var teamsMap = updated['teams'];
      teamsMap[action.competitionID] = fetchedTeams;
      updated['teams'] = teamsMap;
      return updated;

    case _constants2.default.FETCHING_TEAMS:
      return updated;

    case _constants2.default.ERROR_FETCHING_TEAMS:
      return updated;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _authReducer = __webpack_require__(/*! ./authReducer */ "./src/reducers/authReducer.js");

var _authReducer2 = _interopRequireDefault(_authReducer);

var _sweepstakeReducer = __webpack_require__(/*! ./sweepstakeReducer */ "./src/reducers/sweepstakeReducer.js");

var _sweepstakeReducer2 = _interopRequireDefault(_sweepstakeReducer);

var _userReducer = __webpack_require__(/*! ./userReducer */ "./src/reducers/userReducer.js");

var _userReducer2 = _interopRequireDefault(_userReducer);

var _competitionsReducer = __webpack_require__(/*! ./competitionsReducer */ "./src/reducers/competitionsReducer.js");

var _competitionsReducer2 = _interopRequireDefault(_competitionsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  auth: _authReducer2.default,
  sweepstake: _sweepstakeReducer2.default,
  user: _userReducer2.default,
  competitions: _competitionsReducer2.default
};

/***/ }),

/***/ "./src/reducers/sweepstakeReducer.js":
/*!*******************************************!*\
  !*** ./src/reducers/sweepstakeReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  sweepstakes: [],
  current: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var updated = Object.assign({}, state);
  var sweepstakes = updated['sweepstakes'];

  switch (action.type) {

    case _constants2.default.SWEEPSTAKE_CREATED:
      sweepstakes.push(action.data);
      updated['sweepstakes'] = sweepstakes;
      updated['current'] = action.data;
      return updated;

    case _constants2.default.SWEEPSTAKES_RECEIVED:
      sweepstakes = action.data.data;
      updated['sweepstakes'] = sweepstakes;
      return updated;

    case _constants2.default.SWEEPSTAKE_RECEIVED:
      sweepstakes.push(action.data);
      updated['sweepstakes'] = sweepstakes;
      updated['current'] = action.data;
      return updated;

    case _constants2.default.SWEEPSTAKE_SELECTED:
      updated['current'] = action.data;
      return updated;

    case _constants2.default.SWEEPSTAKE_DELETED:
      sweepstakes.splice(action.index, 1);
      updated['sweepstakes'] = sweepstakes;
      return updated;

    case _constants2.default.SWEEPSTAKE_GENERATED:
      sweepstakes.splice(action.index, 1);
      sweepstakes.push(action.data);
      updated['sweepstakes'] = sweepstakes;
      return updated;

    case _constants2.default.MEMBER_ADDED:
      return updated;

    case _constants2.default.FAILED_ADD_MEMBER:
      return updated;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ "./src/constants/index.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  allUsers: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  var updated = Object.assign({}, state);

  switch (action.type) {

    case _constants2.default.FETCHING_USERS:
      return updated;

    case _constants2.default.USERS_RECEIVED:
      var users = action.data.data;
      updated['allUsers'] = users;
      return updated;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/routes/AppRoutes.js":
/*!*********************************!*\
  !*** ./src/routes/AppRoutes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");

var _icons = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRoutes = [{
  path: "/",
  sidebarName: "Dashboard",
  navbarName: "Dashboard",
  icon: _react2.default.createElement(_icons.Home, null),
  component: _layout.Dashboard
}, {
  path: "/create",
  sidebarName: "Create Sweepstake",
  navbarName: "Create Sweepstake",
  icon: _react2.default.createElement(_icons.Create, null),
  component: _layout.CreateSweepstake
}, {
  path: "/profile",
  sidebarName: "Profile",
  navbarName: "Profile",
  icon: _react2.default.createElement(_icons.Person, null),
  component: _layout.ProfilePage
}];

exports.default = AppRoutes;

/***/ }),

/***/ "./src/utils/APIManager.js":
/*!*********************************!*\
  !*** ./src/utils/APIManager.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  get: function get(url, query) {
    return new _bluebird2.default(function (resolve, reject) {
      _superagent2.default.get(url).query(query).set('Accept', 'application/json').end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  },

  post: function post(url, data) {
    return new _bluebird2.default(function (resolve, reject) {
      _superagent2.default.post(url).send(data).set('Accept', 'application/json').end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  },

  put: function put(url, data) {
    return new _bluebird2.default(function (resolve, reject) {
      _superagent2.default.put(url).send(data).set('Accept', 'application/json').end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  },

  delete: function _delete(url) {
    return new _bluebird2.default(function (resolve, reject) {
      _superagent2.default.del(url).send({}).set('Accept', 'application/json').end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ deleted: true });
      });
    });
  }

};

/***/ }),

/***/ "./src/utils/RandomAssigner.js":
/*!*************************************!*\
  !*** ./src/utils/RandomAssigner.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  randomizeGroups: function randomizeGroups(groups, members) {
    return new _bluebird2.default(function (resolve, reject) {
      var sweepstake = [];

      var _loop = function _loop() {
        var memberDetails = {};
        var assignedTeams = [];
        Object.values(groups).forEach(function (group, index) {
          var random = Math.floor(Math.random() * group.length);
          assignedTeams.push(group[random]);
        });
        var user = {
          _id: members[j]._id,
          username: members[j].username
        };
        memberDetails['assignedTeams'] = assignedTeams;
        memberDetails['user'] = user;
        sweepstake.push(memberDetails);
      };

      for (var j = 0; j < members.length; j++) {
        _loop();
      }
      resolve(sweepstake);
    });
  }
};

/***/ }),

/***/ "./src/utils/ServerEntry.js":
/*!**********************************!*\
  !*** ./src/utils/ServerEntry.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		props.component
	);
};

/***/ }),

/***/ "./src/utils/WorldCupApi.js":
/*!**********************************!*\
  !*** ./src/utils/WorldCupApi.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagent = __webpack_require__(/*! superagent */ "./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  get: function get(url, query) {
    return new _bluebird2.default(function (resolve, reject) {
      _superagent2.default.get(url).set('Accept', 'application/json').set('X-Auth-Token', 'd9555dd3b9de42a59fd71da70b404ec0').query(query).end(function (err, response) {
        if (err) {
          reject(err);
          return;
        }
        resolve(response.body);
      });
    });
  }
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorldCupApi = exports.RandomAssigner = exports.APIManager = exports.renderComponents = exports.ServerEntry = undefined;

var _ServerEntry = __webpack_require__(/*! ./ServerEntry */ "./src/utils/ServerEntry.js");

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

var _renderComponents = __webpack_require__(/*! ./renderComponents */ "./src/utils/renderComponents.js");

var _renderComponents2 = _interopRequireDefault(_renderComponents);

var _APIManager = __webpack_require__(/*! ./APIManager */ "./src/utils/APIManager.js");

var _APIManager2 = _interopRequireDefault(_APIManager);

var _RandomAssigner = __webpack_require__(/*! ./RandomAssigner */ "./src/utils/RandomAssigner.js");

var _RandomAssigner2 = _interopRequireDefault(_RandomAssigner);

var _WorldCupApi = __webpack_require__(/*! ./WorldCupApi */ "./src/utils/WorldCupApi.js");

var _WorldCupApi2 = _interopRequireDefault(_WorldCupApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ServerEntry = _ServerEntry2.default;
exports.renderComponents = _renderComponents2.default;
exports.APIManager = _APIManager2.default;
exports.RandomAssigner = _RandomAssigner2.default;
exports.WorldCupApi = _WorldCupApi2.default;

/***/ }),

/***/ "./src/utils/renderComponents.js":
/*!***************************************!*\
  !*** ./src/utils/renderComponents.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");

var _server2 = _interopRequireDefault(_server);

var _ServerEntry = __webpack_require__(/*! ./ServerEntry */ "./src/utils/ServerEntry.js");

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, component) {
	var app = _react2.default.createElement(component);
	var provider = _react2.default.createElement(_ServerEntry2.default, { component: app, store: initialState });

	return {
		react: _server2.default.renderToString(provider),
		initial: JSON.stringify(initialState.getState())
	};
};

/***/ })

/******/ });
//# sourceMappingURL=app.map