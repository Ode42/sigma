const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const routes = require("./routes");


// use router
app.use("/", routes);

// 404 error
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", {root: __dirname});
});

// server listener
app.listen(port, () => console.log(`Server listening on port ${port}`));