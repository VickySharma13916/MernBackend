// To use .env file
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const App = express();
const cors = require("cors");
const connectDB = require("./DB/connect");

const port = process.env.PORT || 5000;

App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use("/uploads", express.static("uploads"));
const user_route = require("./routes/admin");
const notes_route = require("./routes/notes");
App.use("/api/admin", user_route);
App.use("/api/notes", notes_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    App.listen(port, () => {
      console.log(`Backend is live at port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

App.get("/", (req, res) => {
  res.send("Backend is Active Right Now");
});
