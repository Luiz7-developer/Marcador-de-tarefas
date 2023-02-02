// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// MongoClient.connect("mongodb://localhost/todo", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const mongoose = require("mongoose");
module.exports = mongoose.connect("mongodb://localhost/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
