var fs = require('fs');

module.exports = {
    host: 'hostname',
    user: 'root',
    projectName: '~/node-blink/',
    privateKey: fs.readFileSync('sshkey'),
    startFile: 'main.js',
    sshPort: 22
}
