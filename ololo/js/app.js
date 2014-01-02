/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;

$(function () {
	'use strict';

	// kick things off by creating the `App`
	console.log("Hello, app...");
    var vv = new app.AppView();

    console.log("Hello, app ok");

    highlightWord(document.getElementById("highlighted-text"), 'para', 'highlight-yellow');
    highlightWord($("#highlighted-text")[0], 'jaja', 'highlight-red');

});
