const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.11", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();


module.exports = {connect, host, port};