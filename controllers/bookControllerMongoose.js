const connect = require("../database/dbMongoose");
const book = require("../models/book");
const list = async (req, res) => {
  const books = await book.find().exec();

  res.json(books);
  /* book.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  }); */

  // testPromise(3)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(">>>>>>>>");
  //     console.log(error);
  //   });

  // try {
  //   const result = await testPromise(3);
  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }

  /*  book
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      throw new Error(error);
    }); */
};
const show = async (req, res) => {
  const bookShow = await book.findById(req.params.id).exec();
  res.json(bookShow);
};
const add = (req, res) => {
  book.create(req.body);
  res.status(201).json({ data: "book is added" });
};
const update = async (req, res) => {
  await book.findByIdAndUpdate(req.params.id, { $set: req.body });
  res.json({ data: "book is updated" });
};
const deleting = async (req, res) => {
  await book.findByIdAndDelete(req.params.id);
  res.status(204).json();
};

module.exports = {
  list: list,
  show: show,
  add: add,
  update: update,
  deleting: deleting,
};
