const UUID = require("./uuid.js");

const mysql = (new function () {
  const db = this;
  db.mysql = require("mysql");
  db.connect = function () {
    console.log("connect to database html_server");
    db.con = db.mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password1!",
    });
    db.con.connect(function (err) {
      if (err) {
        console.log("error when connecting to db", err);
        setTimeout(db.connect, 2000);
      }
      console.log("connected status=", err);
    });
    db.con.on("error", function (err) {
      console.log("db error occurred ", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        db.connect();
      } else {
        throw err;
      }
    });
    db.con.query("use html_server");
  };
  db.escape = function (str) {
    return str.replace(/'/g, "\\'");
  };
  db.create_html = function (den) {
    const uuid = UUID.uuid();
    const sql = "insert into html values(" +
      "'" + uuid + "'," +
      Date.now() + "," +
      "'" + db.escape(den.html_string) + "'" +
      ")";
    db.con.query(sql);
    return uuid;
  }
  db.get_html = function (uuid) {
    return new Promise((resolve, reject) => {
      db.con.query(`select * from html where uuid='${uuid}'`, function (err, rows, fields) {
        if (err) {
          const err = "mysql read html table error";
          console.log(err);
          reject(err);
        }
        if (rows.length === 0) {
          const err = `no record uuid ${uuid}`;
          console.log(err);
          reject(err);
        }
        resolve(rows[0]);
      });
    });
  }
  db.connect();
});
module.exports = function (app) {
  app.get("/html_server", (req, res) => {
    mysql.get_html(req.query.uuid).then(html_rec => {
      console.log(html_rec);
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.send(html_rec.html_string);
    }, err => {
      res.send(err);
    })
  });

  const wsock = require.main.io.of("/html_server");
  wsock.on("connection", (sock) => {
    sock.on("create_html", (den, callback) => {
      const uuid = mysql.create_html(den);
      callback({ uuid });
    });
  });
};

