const express = require("express");
const router = express.Router();

const memberController = require("./controller");

router.get("/", memberController.getAll);
router.get("/:id", memberController.getById);
router.delete("/:id", memberController.deleteOne);
router.post("/", memberController.addOne);
router.put('/:id',memberController.updateData)

module.exports = router;
