const express = require("express");
const userRouter = require("./apis/user");
const postRouter = require("./apis/post");

const router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
// router.use("/room");

module.exports = router;
