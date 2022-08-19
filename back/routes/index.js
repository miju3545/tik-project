const express = require("express");
const userRouter = require("./apis/user");
const postRouter = require("./apis/post");
const clubRouter = require("./apis/club");
const dmRouter = require("./apis/dm");

const router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/club", clubRouter);
router.use("/dm", dmRouter);

module.exports = router;
