const admin = require("../model/admin");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const postAdminImage = async (req, res) => {
  try {
    let adminAddImage = "";
    if (req.file) {
      const { mimetype } = req.file;
      if (mimetype.startsWith("image/")) {
        adminAddImage = req.file.destination + req.file.filename;
      }
    }
    res.status(200).json({ imageUrl: adminAddImage });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userAdmin = await admin.login(email, password);
    const token = createToken(userAdmin._id);
    const userDetail = await admin.findById(userAdmin._id);
    res.status(200).json({ user: userDetail, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUp = async (req, res) => {
  const { email, password, name,userImage } = req.body;
  try {
    const userAdmin = await admin.signup(email, password, name,userImage);
    const token = createToken(userAdmin._id);
    res.status(200).json({ user: userAdmin, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  signUp,
  postAdminImage,
};
