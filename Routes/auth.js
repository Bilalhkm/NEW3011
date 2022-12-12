const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.route("/signup").post(authController.signUpping);
authRouter.route("/login").post(authController.login);
module.exports = authRouter;
