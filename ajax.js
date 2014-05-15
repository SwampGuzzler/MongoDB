$ = require('jquery');

var data = '';

$.ajax({
	url: 'http://localhost:3000/api/v1/notes', // Find a way to not hard code this: Use browserify mocking enviornmental variables reading!
	data: data,
	success: function(data) {
		data.forEach(function(element) {
			$('#notes').append(element.noteBody);
		});
	},
	dataType: 'json';
});