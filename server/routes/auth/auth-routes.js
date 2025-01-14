const express = require("express");
const {registerUser} = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);

module.exports = router;