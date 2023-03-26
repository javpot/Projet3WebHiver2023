const fileHandler = require('./fileHandler.js');
const fs = require('fs');

console.log("DOM fully loaded and parsed");
module.exports = {
    routeRequest(req, res) {
        console.log('Received request:', req.url);
        fs.readFile("./assets/content/index.html", 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    },
    //.listen(8080);

    isImageRequest(url) {
        return true;
    },

    isCssRequest(url) {
        return true;
    }
}