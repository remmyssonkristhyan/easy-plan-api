const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send("API do sistema EasyPlan para o hackathon da StartSe - Tech Academy");
});

module.exports = router;