$ = require('jquery');

var data = '';

$.ajax({
    url: 'http://localhost:3000/api/v0_0_1/notes', // try to not hard-code this!
    data: data,
    success: function(json) {
        json.forEach(function(element) {
            $('#notes').append('<li>' + element.body + '</li>');
        });
    },
    dataType: 'json'

});