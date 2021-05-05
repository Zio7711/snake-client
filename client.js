const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");

// connect();
const myNumber = 7711;
const myString = "Zio";

module.exports = {
  myNumber,
  myString,
  connect
}

/* conn.on("event name", () => {

});

conn.on("connect", () => {

});
 */