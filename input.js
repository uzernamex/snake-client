let connection;

const setupInput = (conn) => {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};


//TO HANDLE THE KEYBOARD INPUTS

const handleUserInput = function(data) {

  const keyMessageMap = {
    w: 'Move: up',
    a: 'Move: left',
    s: 'Move: down',
    d: 'Move: right',
    x: 'Say: Hello World!',
    z: 'Say: too bad!',
    c: 'Say: nice try.',
    v: 'Say: goodbye'
  };

  if (data === '\u0003') {
    console.log("Thanks for playing along, ciao!");
    process.write("GAME OVER");
    process.exit();
  }

  const command = keyMessageMap[data];
  if (command) {
    connection.write(command);
  }
};

module.exports = {setupInput};