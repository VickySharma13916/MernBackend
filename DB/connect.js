const mongoose = require("mongoose");
const ConnectDB = (uri) => {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log("Connect to the Database");
    })
    .catch((error) => {
      console.log("Error connecting to the database:", error);
    });
};

module.exports = ConnectDB;
