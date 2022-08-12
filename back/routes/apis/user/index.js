const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/me", (req, res) => {
  return res.json(false);
});

router.post("/sign_in", (req, res) => {
  console.log(req.body);
  return res.json({ connected: true });
});

router.post("/sign_up", (req, res) => {
  console.log(req.body);

  return res.json(res.body);
});

router.post("/logout", (req, res) => {
  return res.json("ok");
});

module.exports = router;
