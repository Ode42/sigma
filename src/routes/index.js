const express = require("express");
const router = express.Router();
const path = require("./../utils/base").path;

router.get("/", (req, res) => {
    res.sendFile(`${path}/views/frontpage.html`);
})


module.exports = router;