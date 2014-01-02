/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};


(function ($) {
	'use strict';

    console.log("load app-view.js")

    // The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#wordsapp',

        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'keypress #new-word': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },


        initialize: function() {
            this.allCheckbox = this.$('#toggle-all')[0];
            this.$input = this.$('#new-word');
            this.$footer = this.$('#footer');
            this.$main = this.$('#main');

            this.listenTo(app.words, 'add', this.addOne);
            this.listenTo(app.words, 'reset', this.addAll);

            // New
            this.listenTo(app.words, 'change:completed', this.filterOne);
            this.listenTo(app.words,'filter', this.filterAll);
            this.listenTo(app.words, 'all', this.render);

 // FIXME remove comment
            app.words.fetch();

//            app.words.re();

            console.log("app.words len = " + app.words.length);

        },

        render: function() {
            console.log("app-view render");
            var completed = app.words.completed().length;
            var remaining = app.words.remaining().length;

            if ( app.words.length ) {
                this.$main.show();
                this.$footer.show();

//                this.$footer.html(this.statsTemplate({
//                    completed: completed,
//                    remaining: remaining
//                }));

                this.$('#filters li a')
                    .removeClass('selected')
                    .filter('[href="#/' + ( app.TodoFilter || '' ) + '"]')
                    .addClass('selected');
            } else {
                this.$main.hide();
                this.$footer.hide();
            }

//            this.allCheckbox.count = !remaining;

        },

        // Add a single todo item to the list by creating a view for it, and
        // appending its element to the `<ul>`.
        addOne: function( word ) {
            console.log("addOne");
            var view = new app.WordView({ model: word });
            $('#words-list').append( view.render().el );
        },

        // Add all items in the **Words** collection at once.
        addAll: function() {
            console.log("addAll");
            this.$('#todo-list').html('');
            app.words.each(this.addOne, this);
        },

        // If you hit return in the main input field, create new **Todo** model,
        // persisting it to *localStorage*.
        createOnEnter: function (e) {
            if (e.which !== ENTER_KEY || !this.$input.val().trim()) {
                return;
            }

            app.words.create(this.newAttributes());
            this.$input.val('');
        },

        // Generate the attributes for a new Todo item.
        newAttributes: function () {
            return {
                word: this.$input.val().trim(),
                order: app.words.nextOrder(),
                count: 1
            };
        }

    });
})(jQuery);
