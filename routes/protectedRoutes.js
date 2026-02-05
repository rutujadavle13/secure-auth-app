const express = require("express");
const { isAuthenticated, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard", isAuthenticated, (req, res) => {
  res.send("Welcome to Dashboard");
});

router.get("/admin", isAuthenticated, isAdmin, (req, res) => {
  res.send("Welcome Admin");
});

module.exports = router;
