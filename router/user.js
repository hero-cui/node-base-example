/*
 * @Author: Leo
 * @Date: 2024-03-11 13:32:29
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-13 00:26:06
 */
const express = require("express");

const { runSQL } = require("../utils/dbConnect");
const { getNowFormatDate } = require("../utils/index");

const router = express.Router();

router.post("/login", (_req, res) => {
  res.json({
    message: "Login Success",
  });
});

router.post("/add", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.json({
      code: 400,
      message: "Name is required",
      data: null,
    });
    return;
  }

  const sql = "INSERT INTO user (name,addTime) VALUES (?,?)";
  const currentTime = getNowFormatDate();
  const params = [name, currentTime];

  runSQL(sql, params).then((_result) => {
    res.json({
      code: 200,
      message: "Add User Success",
      data: null,
    });
  });
});

router.get("/list", (_req, res) => {
  const sql = "SELECT * FROM user";
  runSQL(sql).then((result) => {
    res.json({
      code: 200,
      message: "Success",
      data: result,
    });
  });
});

module.exports = router;
