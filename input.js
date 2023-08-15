let connection;

const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput) 
  return stdin;
};

const handleUserInput = function(data) {
  console.log(data);

  const keyMessageMap = {
    w: 'Move: up',
    a: 'Move: left',
    s: 'Move: down',
    d: 'Move: right',
    x: 'Say: Hello World!'
  };

  if (data === '\u0003') {
    console.log("Thanks for playing along, ciao!");
    process.exit();
  }

  const command = keyMessageMap[data];
  if (command) {
    connection.write(command);
  }
};

module.exports = {setupInput};