var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports= Backbone.Model.extend({
	idAttribute: '_id',
	// Later on, we'll learn to mock enviornmental variabls for host
	urlRoot: 'http://localhost:3000/api/v1/notes', //Instead of /note!
	defaults: {
		noteBody: ''
	}
});