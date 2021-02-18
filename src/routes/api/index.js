const path = require("./../../utils/base").path;
const fs = require("fs");
const getTemplates = require(`${path}/services/getTemplates`);

const router = (app, host) => {
    app.get("/api/v1", (req, res) => {
       res.send("Hello from Sigma API")
    });
};



module.exports = router;