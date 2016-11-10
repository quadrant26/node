/**
 * Created by Administrator on 2016/11/10.
 */

var Readable = require('stream').Readable
var Writeable = require('stream').Writable

var readStream = new Readable()
var writeStream = new Writeable()

readStream.push('I ')
readStream.push('Love ')
readStream.push('Imooc\n')
readStream.push(null)

writeStream._write = function (chunk, encode, cb){
    console.log(chunk.toString())
    cb()
}

readStream.pipe(writeStream)