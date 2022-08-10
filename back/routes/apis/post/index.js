const express = require("express");
const uploadsMulter = require("../../middlewares/uploadsMulter");
const router = express.Router();

router.post("/", uploadsMulter.array("imageOrVideoFiles", 10), (req, res) => {
  return res.json({ body: req.body, files: req.files });
});

module.exports = router;
