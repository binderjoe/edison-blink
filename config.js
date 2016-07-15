var fs = require('fs');

module.exports = {
    host: '192.168.0.18',
    user: 'root',
    projectName: '~/node-blink/',
    privateKey: fs.readFileSync('/Users/joe/.ssh/id_edison'),
    startFile: 'main.js',
    sshPort: 22
}
