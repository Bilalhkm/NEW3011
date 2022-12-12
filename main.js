const express = require("express");
const app = express();
const connectDB = require("./database/dbMongoose");
const port = 3000;
const index = require("./Routes/index");
const books = require("./Routes/book");
const bodyParser = require("body-parser");
const auth = require("./Routes/auth");

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/book", books);
app.use("/", index);



connectDB().then(() => {
  app.listen(3000, () => {
    console.log(`Server is running using express ... http://localhost:${port}`);
  });
});
