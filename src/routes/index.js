const path = require("./../utils/base").path;
const blog = require("./blog");
const fs = require("fs");
const getTemplates = require(`${path}/services/getTemplates`);

const router = (app) => {
    let header = "";
    let blog = "";
    app.get("/", (req, res) => {
       const templates = getTemplates()
       .then((data, err) => { // templates are in object inside data
           if (err) console.log(err);
           res.render(`${path}/views/frontpage.html`, {
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