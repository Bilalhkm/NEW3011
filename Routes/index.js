const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.render("home.pug");
});

router.all("/*", (req, res) => {
  res.status(404).render("error");
});

module.exports = router;
