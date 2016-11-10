/**
 * Created by Administrator on 2016/11/10.
 */

var stream = require('stream')
var util = require('util')

function ReadStream(){
    stream.Readable.call(this)
}

util.inherits(ReadStream, stream.Readable)

ReadStream.prototype._read = function (){
    this.push('I ')
    this.push('Love ')
    this.push('Imooc\n')
    this.push(null)
}

function WriteStream(){
    stream.Writable.call(this)
    this._cached = new Buffer('')
}

util.inherits(WriteStream, stream.Writable)


WriteStream.prototype._write = function (chunk, encode, cb){
    console.log(chunk.toString())
    cb()
}

function TrandformStream(){
    stream.Transform.call(this)
}

util.inherits(TrandformStream, stream.Transform)

TrandformStream.prototype._transform = function (chunk, encode, cb){
    this.push(chunk)
    cb()
}

TrandformStream.prototype._flush = function (cb){
    this.push('oh, Yeah!')
    cb()
}

var rs = new ReadStream()
var ws = new WriteStream()
var ts = new TrandformStream()

re.pipe(ts).pipe(ws)