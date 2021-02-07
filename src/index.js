const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const routes = require("./routes");
const mustacheExpress = require("mustache-express");
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
// wesp router

routes(app);

// 404 error
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root: __dirname});
});

// server listener
app.listen(port, () => console.log(`Server listening on port ${port}`));