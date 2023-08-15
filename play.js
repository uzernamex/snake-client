const {connect, host, port } = require("./client.js");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key.toString() === '\u0003') {
      process.exit();
    }
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});

});
};

handleUserInput()
console.log('after callback');