/*
 * @Author: Leo
 * @Date: 2024-03-11 13:15:10
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-13 00:17:04
 */

// 执行 start:dev 命令时指定了环境变量 然后在 app.js 中根据环境变量加载其他不同的配置文件
const environment = process.env.NODE_ENV;
if (environment === "production") {
  require("dotenv").config({ path: ".env.prod" });
} else {
  require("dotenv").config({ path: ".env.dev" });
}

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const router = require("./router/index.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// 指定静态文件目录
app.use("/filesManage", express.static("filesManage"));

const secretKey = "your-secret-key"; // jwt的密钥

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const response = {
      message: "Unauthorized",
      code: 401,
      data: null,
    };
    return res.status(401).json(response);
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    const response = {
      message: "Forbidden",
      code: 403,
      data: null,
    };
    return res.status(403).json(response);
  }
};

// app.use("/api", authenticateToken, router);
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
