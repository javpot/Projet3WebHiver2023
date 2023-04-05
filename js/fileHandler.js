const fs = require('fs');
module.exports = class FileHandler {
    constructor() {};

    async sendHtml(fichier, res) {
        console.log('Received HTML request:', fichier);
        await fs.readFile(fichier, (err, data) => {
            if (err) {
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        });
    };

    async sendImage(fichier, res) {
        console.log('Received IMG request:', fichier);
        await fs.readFile(fichier, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        });
    };

    async sendCss(fichier, res) {
        console.log('Received CSS request:', fichier);
        await fs.readFile(fichier, (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
        });
    };
}