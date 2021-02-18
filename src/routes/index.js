const path = require("./../utils/base").path;
const blog = require("./blog");
const fs = require("fs");
const getTemplates = require(`${path}/services/getTemplates`);

const router = (app, host) => {
    let header = "";
    let blog = "";
    let cssPath = host + "/public/css"
    app.get("/", (req, res) => {
        console.log(cssPath)
       const templates = getTemplates()
       .then((data, err) => { // templates are in object inside data
           if (err) console.log(err);
           res.render(`${path}/public/views/frontpage.html`, {
            css: cssPath,
            lang: "en",
            title: "Wesp",
            header: data.header.toString(),
            blog: data.blog.toString(),
            footer: data.footer.toString()
           })
       });
       
    });
    
};



module.exports = router;