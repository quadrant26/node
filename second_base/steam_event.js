/**
 * Created by Administrator on 2016/11/10.
 */

var fs = require('fs')

var readStream = fs.createReadStream('stream_copy_logo.js')
var n = 0

readStream
    .on('data', function (chunk){   // 数据读取
        n++
        console.log('data emits')
        console.log(Buffer.isBuffer(chunk)
        // console.log(chunk.toString('utf8'))

        readStream.pause()          // 暂停数据暂停
        console.log('data pause')
        setTimeout(function (){
            console.log('data pause end')
            readStream.resume() // 重新启动数据读取
        }, 3000)
    })
    .on('readable', function (){    // 文件只读
        console.log('data readable')
    })
    .on('end', function (){         // 文件读取结束
        console.log(n)
        console.log('data ends')
    })
    .on('close', function (){       // 文件关闭
        console.log('data close')
    })
    .on('err', function (e){        // 文件读取出错
        console.log('data read error' + e)
    })