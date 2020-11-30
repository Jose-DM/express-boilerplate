const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller.js");
router.get("/helloworld", Controller.HelloWorld);

module.exports = router;
