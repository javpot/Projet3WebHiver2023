const fileHandler = require('./fileHandler.js');
const fileHandle = new fileHandler();

console.log("DOM fully loaded and parsed");
module.exports = {
    async routeRequest(req, res) {
        if(this.isImageRequest(req))
            await fileHandle.sendImage(req, res);
        else if(this.isCssRequest(req))
            await fileHandle.sendCss(req, res);
        else
            await fileHandle.sendHtml(req, res);
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