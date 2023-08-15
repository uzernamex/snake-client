const {connect, host, port } = require("./client.js");

const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());