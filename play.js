/* const conn = require("./client");
// const conn = connect();
conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: Zio");
  // conn.write("Move: up");
  // setInterval(() => conn.write("Move: left"), 50);
});
 */

const connect = require("./client");
const setupInput = require("./input");
console.log("Connecting ...");
connect();
setupInput();

