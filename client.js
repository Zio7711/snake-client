const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Zio");
    // conn.write("Move: up");
    // setInterval(() => conn.write("Move: left"), 50);
    conn.on('data',(message) => console.log(`The server says: ${message}`))
  });
  return conn;
};
module.exports = {connect};