// Can tell this is a model because the N in Note.js is capitalized
'use strict';

var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
	notebody: String // Each note is going to have a Field of body which has a type of String
});

module.exports = mongoose.model('Note', noteSchema);
// We are exporting a model object that adheres to the above schema (using the .model method which is included in Mongoose)