const express = require("express");
const router = express.Router();

const loginController = require("../controllers/LoginController");
const middlewareController = require("../controllers/MiddlewareController");

//Home
router.get("/homepage",middlewareController.verifyToken, loginController.homepage);

//LOGIN
router.post("/login", loginController.loginAccount);
router.post("/register", loginController.register);
router.get("/", loginController.login);


module.exports = router;
