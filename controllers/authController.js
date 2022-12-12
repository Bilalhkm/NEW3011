const connect = require("../database/dbMongoose");
const signUp = require("../models/signUp");
// const user = require("../models/loginfo");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const saltRounds = 10;

const signUpping = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = { ...req.body, password };
  const user = await signUp.create(data);
  res.json(
    `Hi ${user.userName} The process is done successfully.. Your information is: ${user}`
  );
};
const login = async (req, res) => {
  const user = await signUp.findOne({ email: req.body.email }).exec();
  if (!user) {
    await res.status(404).json({ error: "email is incorrect" });
  } else {
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      await res.status(404).json({ error: "password is incorrect" });
    } else {
      const token = jwt.sign({ user }, "fake-secret");

      res.json({ user, access_token: token });
    }
  }
};
module.exports = { signUpping: signUpping, login: login };
