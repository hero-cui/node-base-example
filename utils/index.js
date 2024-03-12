/*
 * @Author: Leo Cui
 * @Date: 2024-03-11 19:08:51
 * @LastEditors: Leo Cui
 * @LastEditTime: 2024-03-13 00:24:11
 */
// 常用工具

// 获取当前时间 2018-08-08 08:08:08
function getNowFormatDate(type = "YYYY-MM-DD hh:mm:ss") {
  const date = new Date();
  const separator1 = "-";
  const separator2 = ":";
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  if (month >= 1 && month <= 9) {
    month = `0${month}`;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = `0${strDate}`;
  }
  if (hour >= 0 && hour <= 9) {
    hour = `0${hour}`;
  }
  if (minute >= 0 && minute <= 9) {
    minute = `0${minute}`;
  }
  if (second >= 0 && second <= 9) {
    second = `0${second}`;
  }
  let currentDate = "";
  if (type === "YYYY-MM-DD hh:mm:ss") {
    currentDate = `${date.getFullYear()}${separator1}${month}${separator1}${strDate} ${hour}${separator2}${minute}${separator2}${second}`;
    return currentDate;
  }
  if (type === "YYYY-MM-DD") {
    currentDate = `${date.getFullYear()}${separator1}${month}${separator1}${strDate}`;
    return currentDate;
  }
}

module.exports = {
  getNowFormatDate,
};
