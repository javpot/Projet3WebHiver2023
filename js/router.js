const fileHandler = require("./fileHandler.js");
const fileHandle = new fileHandler();

console.log("DOM fully loaded and parsed");
module.exports = {
    routeRequest(req, res) {
        if(!req.endsWith(".ico"))
            if(req === "./")
                fileHandle.sendHtml("index.html", res);
            else if(this.isImageRequest(req))
                fileHandle.sendImage(req, res);
            else if(this.isCssRequest(req))
                fileHandle.sendCss(req, res);
            else
                fileHandle.sendHtml(req, res);
    },

    isImageRequest(url) {
        if(url.includes("png"))
            return true;
        return false;
    },

    isCssRequest(url) {
        if(url.includes("css"))
            return true;
        return false;
    },
}