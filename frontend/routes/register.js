const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { email, name, mobileNo, githubUsername, rollNo, collegeName, accessCode } = req.body;

  if (!email || !name || !mobileNo || !githubUsername || !rollNo || !collegeName || !accessCode) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  res.status(201).json({ message: "User registered successfully!", data: req.body });
});

module.exports = router;
