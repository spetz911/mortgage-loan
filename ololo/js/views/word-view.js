/**
 * Created by oleg on 22/12/13.
 */

var app = app || {};

(function ($) {
    'use strict';

    console.log("load word-view.js");

    app.WordView = Backbone.View.extend({

        tagName:  'li',

        // Cache the template function for a single item.
        template: _.template($('#item-template').html()),

        events: {
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'click .success': 'makeSuccess',
            'blur .edit':   'close'
        },

        // The TodoView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Todo** and a **TodoView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'visible', this.toggleVisible);
        },

        // Re-render the title of the todo item.
        render: function() {
            console.log("word-view render");

            this.$el.html(this.template(this.model.toJSON()));
            this.input = this.$('.edit');
            return this;
        },

        edit: function() {
            // executed when todo label is double clicked
        },

        close: function() {
            // executed when todo loses focus
        },

        updateOnEnter: function( e ) {
            // executed on each keypress when in todo edit mode,
            // but we'll wait for enter to get in action
        },

        // Remove the item, destroy the model from *localStorage* and delete its view.
        clear: function () {
            this.model.destroy();
        },

        makeSuccess: function() {
            console.log("make success");
            this.model.destroy();
        }

    });
})(jQuery);
