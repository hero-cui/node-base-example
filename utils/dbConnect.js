/*
 * @Author: Leo Cui
 * @Date: 2024-03-11 18:33:20
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-12 21:43:09
 */

const mysql = require("mysql2");
const mysqlConfig = require("../config/data");

const isDev = process.env.NODE_ENV === "development";

const pool = mysql.createPool({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
});

const runSQL = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        if (isDev) {
          console.log("数据库连接失败: ", err);
        }
        reject(err);
        return;
      }
      if (isDev) {
        console.log("执行sql: ", sql);
        console.log("参数: ", params);
      }
      connection.query(sql, params, (error, results, fields) => {
        connection.release();
        if (error) {
          if (isDev) {
            console.log("数据库查询失败: ", error);
          }
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  });
};

module.exports = {
  runSQL,
};
