var http = require('http');
var server = http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
});
server.listen(8080,'192.168.50.112');
