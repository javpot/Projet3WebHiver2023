const fs = require("fs");
const path = require("path");

module.exports = class FileHandler {
    CONTENTTYPES = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
        ".bmp": "image/bmp",
        ".webp": "image/webp",
        ".html": "text/html",
        ".htm": "text/html",
        ".css": "text/css",
        ".js": "text/javascript"
    };

    constructor() {};

    getContentTypeByExtension(fichier) {
        const extension = path.extname(fichier).toLowerCase();

        return this.CONTENTTYPES[extension] || "application/octet-stream";
    };

    sendHtml(fichier, res) {
        fichier = "./assets/content/" + fichier;
        console.log("Received HTML request:", fichier);

        fs.readFile(fichier, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.writeHead(200, "utf-8", {"Content-Type": this.getContentTypeByExtension(fichier)});
            res.end(data);
        });
    };

    sendImage(fichier, res) {
        console.log("Received IMG request:", fichier);
        fs.readFile(fichier, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.writeHead(200, "utf-8", {"Content-Type": "image/png"});
            res.write(data);
            res.end();
        });
    };

    sendCss(fichier, res) {
        console.log("Received CSS request:", fichier);
        fs.readFile(fichier, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.writeHead(200, "utf-8", {"Content-Type": "text/css"});
            res.write(data);
            res.end();
        });
    };
}