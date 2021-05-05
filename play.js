const {myNumber, myString, connect} = require("./client");
const conn = connect();
conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: Zio");
});
