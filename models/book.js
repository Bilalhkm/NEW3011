const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bookSchema = new Schema({
    title: { type: String, required:true },
    author: { type: String, required:true }
}, {
    strict: true,
    strictQuery: true // Turn off strict mode for query filters
  });
  mongoose.set('strictQuery', true);

module.exports=mongoose.model('book',bookSchema);