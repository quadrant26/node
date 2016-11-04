/**
 * Created by Administrator on 2016/11/4.
 */


function sum(a, b){
    return a + b
}

var result = 0
for(var i = 0; i < 100; i++){
    result += i
}
console.log(result)

exports.sum = sum