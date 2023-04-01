const mongoose = require(`mongoose`);

const schema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  nmrPages: { type: Number },
})

const livros = mongoose.model("livros", schema);

module.export = livros;
