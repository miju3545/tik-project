const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json(false);
});

router.post("/sign_up", (req, res) => {
  return res.json({ connected: true });
});

module.exports = router;
