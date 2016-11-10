/**
 * Created by Administrator on 2016/11/10.
 */

var http = require("http")
var blue = require("bluebird")
var fs = require("fs")

var options = {
    key : fs.rendFileSync('ssh_key.pem'),
    cert : fs.readFileSync('ssk_cert.pem')
}

http.createServer(options, function (req, res){
    res.writeHead(200)
    res.end("Hello, world")
}).listen(8090)


