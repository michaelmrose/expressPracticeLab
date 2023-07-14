var express = require("express");
var router = express.Router();
var studentsController = require("../controllers/students");

router.get("/", studentsController.index);
router.get("/:id", studentsController.show);

module.exports = router;
