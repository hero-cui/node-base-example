/*
 * @Author: Leo Cui
 * @Date: 2024-03-11 18:35:02
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-13 01:24:54
 */

// 数据库配置
const dev_data = {
  host: "", // 数据库地址
  user: "", // 数据
  password: "", // 数据库密码
  database: "", //  数据库名称
};

const prod_data = {
  host: "",
  user: "",
  password: "",
  database: "",
};

module.exports = process.env.NODE_ENV === "production" ? prod_data : dev_data;
