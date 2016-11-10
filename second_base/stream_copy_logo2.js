/**
 * Created by Administrator on 2016/11/10.
 */

var fs = require('fs')

var readStream = fs.createReadStream('1.mp4')
var writeStream = fs.createReadStream('1-stream.mp4')

readStream.on('data', function (chunk){
    if( writeStream.write(chunk) === false){ // 数据还在缓存区
        console.log('still cached')
        readStream.pause()
    }
})

readStream.on('end', function(){
    writeStream.end()
})

writeStream.on('drain', function (){
    console.log('data drains')

    readStream.resume()
})
