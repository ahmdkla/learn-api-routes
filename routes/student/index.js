const express = require("express");
const router = express.Router();

const studentController = require("./controller");

router.get("/", studentController.getAll);
router.get("/:id", studentController.getById);
router.delete("/:id", studentController.deleteById);

module.exports = router;
