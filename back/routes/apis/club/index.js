const express = require("express");

const router = express.Router();

router.post("/club", (req, res) => {
  return res.json("ok");
});

module.exports = router;
