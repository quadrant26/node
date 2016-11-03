Node 中的对象

1. global 对象

    __dirname   在 node 中执行的 绝对路径
    __filename  文件名
    console
        console.log()
        console.info()
        console.error()
        console.warn()

        console.time(str)
        console.timeEnd(str)       time() 和 timeEnd()  字符串参数必须一致

    cmd 打印输出信息
        node filename.js 1>log.txt 2> error.txt
        node filename.js 1>log.txt 2>&1

    process
        process.stdout/stderr  标准输出/标准错误输出
        stdin       获取用户的键盘输入
        cwd