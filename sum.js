/**
 * Created by Administrator on 2016/11/4.
 */


function sum(a, b){
    return a + b
}

function sum2(m, n){

    var temp = 0
    if(m > n){
        temp = m
        n = temp
        m = n
    }
    var result = 0
    for(m; m < n; m++){
        result += m
    }
    return result
}

var result = 0
for(var i = 0; i < 100; i++){
    result += i
}
console.log(result)

exports.sum = sum
exports.sum2 = sum2