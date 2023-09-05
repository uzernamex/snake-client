const net = require("net");

const { host, port } = require("./constants");


//ESTABISH A CONNECTION

const connect = function() {
  const conn = net.createConnection({
    host,
    port,
  });

//MESSAGES TO USER

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("New client connected!");
    setTimeout(() => {
      conn.write("Name: MAC");
    }, 200);
  });
  conn.on("end", () => {
    conn.write("GAME OVER!!!");
    process.exit();
  });
  conn.on("error", () => {
    conn.write("GAME OVER");
    process.exit();
  });
  return conn;
};

module.exports = {connect};