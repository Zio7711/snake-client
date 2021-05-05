const {myNumber, myString, connect} = require("./client");
const conn = connect();
conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: Zio");
  // conn.write("Move: up");
  // setInterval(() => conn.write("Move: left"), 50);
});

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const stdin = setupInput();

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

stdin.on("data", handleUserInput);

