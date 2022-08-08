const express = require("express");
const userRouter = require("./user");

const router = express.Router();
router.use("/user", userRouter);
// router.use("/post");
// router.use("/room");

module.exports = router;
