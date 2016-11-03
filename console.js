/**
 * Created by Administrator on 2016/11/3.
 */

console.log("This is a log")

console.info("This is a info")

console.warn("This is a warn")

console.error("This is a error")

console.time('Test')
for(var i = 0; i < 100000; i++){}
console.timeEnd('Test')