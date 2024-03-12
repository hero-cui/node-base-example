/*
 * @Author: Leo Cui
 * @Date: 2024-03-11 13:38:07
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-12 23:34:55
 */

const express = require("express");
const router = express.Router();

const userRoutes = require("./user");
const chatRoutes = require("./chat");
const filesRoutes = require("./files");

router.use("/user", userRoutes);
router.use("/chat", chatRoutes);
router.use("/files", filesRoutes);

module.exports = router;
