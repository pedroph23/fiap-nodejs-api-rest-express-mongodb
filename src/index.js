const express = require("express");
const db = require(`${__dirname}/config/db.js`);
const Livros = require(`${__dirname}/models/Livros.js`);
const app = express();
const port = 3000;

/** middleware */
app.use(express.json());

let books = [{
  id: "0",
  title: "Harry Potter"
}, {
  id: "1",
  title: "Comunicação Não Violenta"
}];

app.get("/livros", (req, res) => {
  res.status(200);
  res.send(books);
});

app.get("/livros/:id", (req, res) => {
  const { id } = req.params;
  const index = _findBook(id);
  const book = books[index];

  res.status(200);
  res.send(book);
});

app.post("/livros", (req, res) => {
  const book = req.body;
  books.push(book);

  res.status(201);
  res.send(books);
});

app.put("/livros/:id", (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const index = _findBook(id);

  books[index] = book;

  res.status(200);
  res.send(books);
  
});

app.delete("/livros/:id", (req, res) => {
  const { id } = req.params;
  const index = _findBook(id);

  books.splice(index, 1);

  res.status(200);
  res.send(`Livro, com o id: ${id}, foi removido!`);
});

function _findBook(id) {
  return books.findIndex(book => book.id === id);
}

app.listen(port, () => {
  console.log("Library Plataform on Node.js");
  console.log(`Listenning on port ${port}`);
});