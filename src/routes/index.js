const path = require("./../utils/base").path;
const blog = require("./blog");

const router = (app) => {
    app.get("/", (req, res) => {
        res.send("Hello from Wesp")
    })
    blog(app);
}

module.exports = router;