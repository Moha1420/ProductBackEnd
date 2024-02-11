// const express = require("express");
// const { protect } = require("../middleware/authMiddleware");
// const {
//   register,
//   login,
//   getProfile,
// } = require("../controllers/userController");

// router.post("/", register);
// router.post("/login", login);
// router.get("/profile", protect, getProfile);

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  register,
  login,
  getProfile,
} = require("../controllers/userControllers");

router.post("/", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

module.exports = router;