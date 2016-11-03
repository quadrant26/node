/**
 * Created by Administrator on 2016/11/3.
 */
// process.stdout -> standard output
// process.stderr -> standard error

process.stdout.write("This is stdout");

process.stderr.write("This is stderr");

process.stdin.setEncoding("utf-8");

// process.stdin.on("data", function (data){
//     console.log(data);
// })

// process.stdin.on("readable", function (){
//     var data = process.stdin.read()
//     console.log(data);
// })

console.log(process.cwd())