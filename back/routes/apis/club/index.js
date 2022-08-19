const express = require("express");

const router = express.Router();

// club 생성
router.post("/", (req, res) => {
  return res.json("ok");
});

// club 내부의 맴버 목록 가져옴
router.get("/:club/members", (req, res) => {});

// club 으로 맴버 초대
router.post("/:club/members", (req, res) => {});

// club 맴버 제거/탈퇴
router.delete("/:club/member/:id", (req, res) => {});

// club 맴버인 특정 id user 정보 가져오기
router.get("/:club/member/:id", (req, res) => {});

module.exports = router;
