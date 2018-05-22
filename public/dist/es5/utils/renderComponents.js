"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var ReactDOMServer = _interopRequire(require("react-dom/server"));

var ServerEntry = _interopRequire(require("./ServerEntry"));

module.exports = function (initialState, component) {
	var app = React.createElement(component);
	var provider = React.createElement(ServerEntry, { component: app, store: initialState });

	return {
		react: ReactDOMServer.renderToString(provider),
		initial: JSON.stringify(initialState.getState())
	};
};