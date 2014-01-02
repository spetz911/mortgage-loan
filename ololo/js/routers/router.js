/*global Backbone */
var app = app || {};


(function () {
	'use strict';

    console.log("load router.js");

    // Words Router
	// ----------
	var WordRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.WordFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			app.words.trigger('filter');
		}
	});

	app.WordRouter = new WordRouter();
	Backbone.history.start();
})();
