const express = require("express");
const { login, signUp, postAdminImage } = require("../controller/admin");
const uploads = require("../middleware/uploadFile");
const router = express.Router();

router.post("/uploads",uploads.single("userImage"), postAdminImage);
router.post("/login", login);
router.post("/sign-up", signUp);

module.exports = router;
