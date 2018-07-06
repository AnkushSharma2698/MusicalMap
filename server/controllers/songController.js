const mongoose = require("mongoose");
const Song = mongoose.model("songs");

exports.index = function(req, res) {
  res.send("not Implemented: Song Homepage");
};

exports.song = function(req, res) {
  Song.findOne({
    id: req.params.id
  }).then(data => res.json(data));
};

exports.post_song = function(req, res) {
  console.log("ARTIST: ", req.body.song.artists[0].name);
  console.log("IMAGE: ", req.body.song.album.images[2]);
  new Song({
    name: req.body.song.name,
    artist: req.body.song.artists[0].name,
    image: req.body.song.album.images[2].url,
    // externalURL: String,
    songId: req.body.song.id,
    previewURL: req.body.song.preview_url,
    uri: req.body.song.uri
  })
    .save()
    .then(data => res.json(data));
};

exports.put_song = function(req, res) {
  Song.findOne({
    id: req.params.id
  }).then(song => console.log("SONG:", song));
};
