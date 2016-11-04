/**
 * Created by Administrator on 2016/11/4.
 */

var fs = require("fs")

fs.readFile('sum.js', function (err, data){
    if(err){
        console.log(err)
    }else{
        // console.log(data)
        // 输出文本内容 .toString()
        // readFile() 第二个可选的编码形式 ( "utf-8" )
        console.log("end async read")
    }
})

console.log("start async read")
var data = fs.readFileSync('sum.js', 'utf-8')
// console.log(data)
console.log("sync end")