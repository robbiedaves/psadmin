"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//Router.run(routes, Router.HistoryLocation, function(Handler) { // Use this for History Locations URLs instead of Hash based
Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
