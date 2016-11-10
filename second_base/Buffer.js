/**
 * Created by Administrator on 2016/11/10.
 */

/**
 * [
 *  Function : Buffer]
 *  poolSize :
 *  isBuffer : [Function : isBuffer]
 *  compare: [Function : compare]
 *  isEncoding : [Function]
 *  concat : [Function]
 *  byteLength: [Function]
 * ]
 * */

/**
 * Buffer 实例方法
 * buffer[index]
 * buffer.length
 * buffer.write(string, offset=0, length, encoding='utf-8')
 * buffer.copy(target, tStart, sStart, sEnd=buffer.length)
 * buffer.slice(start, end)
 * buffer.compare(otherBuffer)
 * buffer.equals(otherBuffer)
 * buffer.fill(value, offset, end)
 *
 */

console.log(Buffer)

var buf = new Buffer('Hello, world')
console.log(buf.length)
console.log(buf.toString())
buf.write('imoocimmoc', 2, 16)
console.log(buf.toString())

var buf1 = new Buffer('hello, imooc')
var buf2 = new Buffer(5)

buf.copy(buf2)
console.log(buf.toString())

var buf3 = new Buffer('dW1vb2M=', 'base64')
var str = buf3.toString('hex')
console.log(str)

var buf4 = new Buffer('756d6f6f63', 'hex')
var str2 = buf4.toString('utf-8')
console.log(str2)
var str3 = buf4.toString('base64')
console.log(str3)