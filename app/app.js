var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

Backbone.$ = $;


var Note = require('./models/note');
var NoteView = require('./modelViews/note');
var NoteCollection = require('./collections/noteCollection');
var CollectionView = require('../collectionViews/noteCollectionView');

$(function(){
	var collection = new NoteCollection();
	var noteCollectionView = new CollectionView({collection: noteCollection});

	collection.fetch({}, {
		success: function() {
			console.dir(this);
		}
	});

	
});

/*var note = new Note({noteBody: "A new freaking note!"});
	note.save();
	var noteView = new NoteView({model: note});
	$('#notes').append(noteView.$el); */