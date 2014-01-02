/**
 * Created by oleg on 21/12/13.
 */

var app = app || {};


(function () {
    'use strict';

    console.log("load word.js")

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `completed` attributes.
    app.Word = Backbone.Model.extend({
        initialize: function(){
            console.log('ToDo model has been initialized.');
        },
        // Default attributes for the todo
        // and ensure that each todo created has `title` and `completed` keys.
        defaults: {
            word: 'empty',
            count: 10
        },

        // Toggle the `completed` state of this todo item.
        toggle: function () {
            this.save({
                count: this.get('count') + 1
            });
        }

    });
})();

