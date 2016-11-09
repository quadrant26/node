/**
 * Created by Administrator on 2016/11/9.
 */

var querystring = require("querystring")

console.log(querystring.stringify({name:'king', courese:['jade', 'ndoe'], format:''}))

console.log(querystring.stringify({name:'king', courese:['jade', 'ndoe'], format:''}, ','))

console.log(querystring.stringify({name:'king', courese:['jade', 'ndoe'], format:''}, ',', ":"))

console.log(querystring.parse("name=sf&age=sdf&age=23342"))

console.log(querystring.parse("name=king,courese=jade,courese=ndoe,format=", '='))

console.log(querystring.parse("name:king,courese:jade,courese:ndoe,format:", ',', ":"))

console.log(querystring.escape("<哈哈>"))

console.log(querystring.unescape("%3C%E5%93%88%E5%93%88%3E"))