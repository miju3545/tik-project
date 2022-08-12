const express = require("express");
const uploadsMulter = require("../../middlewares/uploadsMulter");
const router = express.Router();

router.post("/", uploadsMulter.array("files", 10), (req, res) => {
  console.log(req.files);
  return res.json({ body: req.body, files: req.files });
});

module.exports = router;
