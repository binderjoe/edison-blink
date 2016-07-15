var fs = require('fs');
var os = require('os');
var path = require('path');

var sshKeyPath = path.join(os.homedir(), '.ssh/', 'id_edison');

module.exports = {
    host: '192.168.0.18',
    user: 'root',
    projectName: '~/node-blink/',
    privateKey: fs.readFileSync(sshKeyPath),
    startFile: 'main.js',
    sshPort: 22
}
