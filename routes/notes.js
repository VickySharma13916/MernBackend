const express = require("express");
const {
  GetNotesData,
  GetNotesDataById,
  AddNotesData,
  UpdateNotesById,
  DeleteNotesById,
} = require("../controller/notes");

const route = express.Router();

route.post("/", AddNotesData);
route.get("/", GetNotesData);
route.get("/:id", GetNotesDataById);
route.put("/:id", UpdateNotesById);
route.delete("/:id", DeleteNotesById);

module.exports = route;
