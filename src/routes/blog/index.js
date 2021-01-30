const path = require("./../../utils/base").path;

const blog = (app) => {
    app.get("/blog", (req, res) => {
        res.send("Blog")
    })
}

module.exports = blog;