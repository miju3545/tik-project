const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.json(false);
});

router.post("/sign_up", (req, res) => {
  console.log(req.body);
  // user 생성
  // user 로그인
  return res.json({ connected: true });
});

router.post("/logout", (req, res) => {
  return res.json("ok");
});

module.exports = router;
