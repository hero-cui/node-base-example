/*
 * @Author: Leo
 * @Date: 2024-03-11 13:32:29
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-11 20:34:13
 */
const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    message: "Hello World from chat.js",
  });
});

module.exports = router;
