const mongoose = require("mongoose");

async function _connectionDatabase() {
  await mongoose.connect('mongodb+srv://aluranode:aluranodepass@alura-node.vdhnnne.mongodb.net/?retryWrites=true&w=majority');
}

_connectionDatabase().then(() => {
  console.info("Well done! Mongo database is connected!");
}).catch(err => {
  console.error({ title: "Connection failed", err: err });
  mongoose.disconnect();
});

exports.module = mongoose;