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


var http = require('hhtp');
var fs = require('fs');

fs.createReadStream('1.mp4').pipe(fs.createWriteStream('1-pipe.mp4'));