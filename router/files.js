/*
 * @Author: Leo
 * @Date: 2024-03-11 13:32:29
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-13 00:10:41
 */

const express = require("express");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/upload", (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./filesManage";
  form.keepExtensions = true; // 保持文件的原始扩展名

  form.parse(req, (_err, _fields, files) => {
    const file = files.file[0]; // file 可能是数组 多个文件上传的
    const oldPath = file.filepath;
    // const newFilename = Date.now() + "_" + Math.floor(Math.random() * 1000); // 重命名文件 防止重名 时间戳+随机数
    const newFilename = file.newFilename + "_" + file.originalFilename;
    const newPath = "./filesManage/" + newFilename;

    if (!fs.existsSync("./filesManage")) {
      fs.mkdirSync("./filesManage", { recursive: true });
    }

    // 将文件从临时目录移动到指定目录
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.log("File Upload Failed: ", err);
        res.json({
          code: 400,
          message: "File Upload Failed",
          data: null,
        });
        return;
      }
      // 返回可访问的文件路径
      // const absolutePath = path.resolve(newPath); // 绝对路径

      const environment = process.env.NODE_ENV;
      let serverPath = "";
      if (environment === "production") {
        serverPath = process.env.API_URL + /filesManage/ + newFilename;
      } else {
        serverPath = process.env.API_URL + /filesManage/ + newFilename;
      }
      res.json({
        code: 200,
        message: "success",
        data: {
          path: serverPath,
        },
      });
    });
  });
});

module.exports = router;
