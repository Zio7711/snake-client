const { connect } = require("./client");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

let interval;
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    clearInterval(interval);
    interval = setInterval(() => connection.write('Move: up'), 200);
  } else if (key === "s") {
    clearInterval(interval);
    interval = setInterval(() => connection.write('Move: down'), 200);
  } else if (key === "a") {
    clearInterval(interval);
    interval = setInterval(() => connection.write('Move: left'), 50);
  } else if (key === "d") {
    clearInterval(interval);
    interval = setInterval(() => connection.write('Move: right'), 50);
  }
};

module.exports = {setupInput};