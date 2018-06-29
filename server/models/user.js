const mongoose = require("mongoose");
const { Schema } = mongoose; //same as const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

//creating a model class, first argument is the name fo the collection , second arg is the user schema
mongoose.model("users", userSchema);
