const express = require("express");
const router = express.Router();

const userController = require("./controller");

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.delete("/:id", userController.deleteOne);
router.post("/", userController.addOne);
router.post("/login", userController.login);
router.put("/:id", userController.updateOne);

module.exports = router;
