const { basename } = require("path");

module.exports = (ctxRef) => {
  const { gitInfo } = ctxRef.current;
  const { username, email } = gitInfo || {};

  return {
    "description": "生成 vite 工程",
    "questions": [
      {
        "type": "text",
        "name": "projectName",
        "message": "请输入工程的名称",
        "initial": basename(process.cwd())
      },
      {
        "type": "text",
        "name": "username",
        "message": "请输入用户名称",
        "initial": username
      },
      {
        "type": "text",
        "name": "email",
        "message": "请输入 email 地址",
        "initial": email
      }
    ],
    "type": "app"
  }
};