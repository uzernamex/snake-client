const net = require("net");
//const host = "192.168.0.11";
//const port = 50541;

const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    IP,
    PORT,
  });
  
  conn.setEncoding("utf8");
  conn.on("connect", (client) => {
    console.log("New client connected!");
    setTimeout(() => {
      conn.write("Name: MAC");
    }, 200);
  });
  return conn;
};

module.exports = {connect};