/**
 * Created by Administrator on 2016/11/4.
 */

var http = require("http")
var fs = require("fs")

var server = http.createServer(function (request, response){
    // response.end("hello, world")
    fs.readFile("index.html", 'utf-8', function (err, data){
        response.end(data)
    })
    //response.end("<html><head><meta charset='utf-8' /></head><body>I love Nodejs</body></body></head></html>")
})

server.listen(8888)