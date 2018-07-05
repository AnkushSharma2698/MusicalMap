const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema({
  name: String,
  artist: String,
  image: String,
  externalURL: String,
  songId: String,
  previewURL: String,
  uri: String,
});

mongoose.model("songs", songSchema);