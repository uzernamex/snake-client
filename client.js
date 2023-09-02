const net = require("net");

const { host, port } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host,
    port,
  });
  
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("New client connected!");
    setTimeout(() => {
      conn.write("Name: MAC");
    }, 200);
  });
  conn.on("end", () => {
    console.log("GAME OVER!!!")
    process.exit();
  }) 
  conn.on("error", () => {
    console.log("GAME OVER!!!");
    process.exit();
  }) 
  return conn;
};


module.exports = {connect};