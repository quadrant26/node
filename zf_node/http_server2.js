/**
 * Created by Administrator on 2016/11/4.
 */

var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer(function (request, response){

    var urlobj = url.parse(request.url)
    // console.log(urlobj)
    var pathname = urlobj.pathname
    var query = urlobj.query

    console.log(pathname)
    if(pathname == "/"){  // 没有任何输入，直接返回 首页
        readFileResponse('/index.html', response)
    }
    else if(pathname === '/ajax'){
        response.end('{"msg":"This is a json response."}')
    }else{
        readFileResponse(pathname, response)
    }

}).listen(8888)

// // 通过 url 返回处理文件
function readFileResponse(pathname, response){
    fs.readFile(pathname.substr(1), 'utf-8', function (err, data){
        if(err){
            response.writeHead(404)
            response.end("File not found")
        }
        response.end(data)
    })
}