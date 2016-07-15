var fs = require('fs');
var os = require('os');
var path = require('path');

var sshKeyPath = path.join(os.homedir(), '.ssh/', 'id_edison');

module.exports = {
    host: 'hostname',
    user: 'root',
    projectName: '~/node-blink/',
    privateKey: fs.readFileSync(sshKeyPath),
    startFile: 'main.js',
    sshPort: 22
}
