/* start of host variables */
const port = process.env.PORT || 5000;
const host = `http://localhost:${port}`;
const path = require("./utils/base").path;
/* end of host variables */


/* start of server variables */
const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
 /* end of server variables*/


 /* start of 1st party imports */
 const routes = require(`${path}/routes/`);
 const api = require(`${path}/routes/api`)
  /* end of 1st party imports */


 /* start of app configuration */
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public/"));
app.use(express.static(__dirname + '/public'));
/* end of app configuration */


/* start of executing modules */
api(app, host);
routes(app, host);
/* end of executing modules */

// 404 error
app.use((req, res) => {
    res.status(404).sendFile("./public/views/404.html", {root: __dirname});
});

// server listener
app.listen(port, () => console.log(`Server listening on port ${port}`));