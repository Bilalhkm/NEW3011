const { ObjectID } = require("bson");
const jwt = require("jsonwebtoken");
const signUp = require("../models/signUp");

const auth = async function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decode = await jwt.verify(token, "fake-secret");
      const user = await signUp.findOne({ _id: ObjectID(decode.user._id) });
      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      next();
    } catch (error) {
      res.status(401).json({ error: "Unauthorized" });
    }
  }
};
module.exports = auth;
