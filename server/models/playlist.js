const mongoose = require("mongoose");
const { Schema } = mongoose;

const playlistSchema = new Schema({
    name: String,
    externalURL: String,
    playlistId: String,
});

mongoose.model("playlist", playlistSchema);