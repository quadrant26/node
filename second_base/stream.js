/**
 * Created by Administrator on 2016/11/10.
 */

/**
 * Stream 种类
 * Readable
 * Writeable
 * Duplex
 * Trandform
 */


var http = require('hhtp')
var fs = require('fs')
var request = require('request')

http.createServer(function (req, res){
    /*fs.readFile('./logo.png', function (err, data){
        if(err){
            res.end('file not exist')
        }
        else{
            res.writeHeader(200, {'Context-Type' : 'text/html'})
            res.end(data)
        }
    })*/

    // fs.createReadStream('logo.png').pipe(res)

    // request(url).pipe(res)

}).listen(8888)