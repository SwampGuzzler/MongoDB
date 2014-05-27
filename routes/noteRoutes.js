//routes/noteRoutes.js
var Note = require('../models/Note');

module.exports.collection = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.dir(req.params);
  Note.find({}, function(err, users) {
        if (err) {
            res.send(500, {
                err: err
            });
            return false;
        }
        res.send(users);

    });
};

module.exports.findById = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Note.findOne({"_id":req.params.id}, function(err, note) {
    if(err) {
      res.send(500, {err: err});
      return false;
    }
    res.send(note);
  });
};

module.exports.create = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var body = req.body;
  var note = new Note({noteBody: body.noteBody});
  note.save(function(err, newNote) {
    if(err) {
      res.send(500, {err: err});
      return false;
    }
    res.send(newNote);
  });
};

exports.update = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var id = req.params.id;
  delete req.body._id;

  Note.update({'_id' : id}, req.body, function(err) {
                     if(err) {
                       res.send(500, {error: err});
      return false;
    }
    res.send({"message": "Updated!"});
  })
};

exports.destroy = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Note.remove({'_id' : req.params.id}, function(err) {
    if(err) {
      res.send(500, {error: err});
      return false;
    }
    res.send({"message" : "Destroyed!!"});
  });
};