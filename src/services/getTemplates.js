const fs = require("fs");
const path = require("./../utils/base").path; // require path variable

const getTemplates = async () => { // function for getting html templates
    const frontpage = fs.readFileSync(`${path}/views/frontpage.html`, {encoding: 'utf8', flag: 'r'}, );
    const header = fs.readFileSync(`${path}/views/header.html`, {encoding: 'utf8', flag: 'r'}, );
    const blog = fs.readFileSync(`${path}/views/blog.html`, {encoding: 'utf8', flag: 'r'}, );
    // get templates with synchronous readFileSync-function
    return {
        frontpage: frontpage,
        header: header,
        blog: blog
    }; // return templates
}


module.exports = getTemplates;