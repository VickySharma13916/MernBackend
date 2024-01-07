const express = require("express");
const { login, signUp } = require("../controller/admin");
const router = express.Router();

router.post("/login", login);
router.post("/sign-up", signUp);

module.exports = router;
