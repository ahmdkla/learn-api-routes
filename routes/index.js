const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ message: "welcome to my mongo api" });
});

module.exports = router;
