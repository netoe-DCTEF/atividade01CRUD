const mongoose = require("mongoose");

const uri =
  "mongodb+srv://ely:ely@info5.exwqa.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

module.exports = mongoose;
