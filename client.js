const { IP, PORT, userName } = require("./constants");
const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${userName}`);
    // conn.write("Move: up");
    // setInterval(() => conn.write("Move: left"), 50);
    conn.on('data',(message) => console.log(`The server says: ${message}`))
  });
  return conn;
};
module.exports = {connect};