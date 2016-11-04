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

            .setEncoding("utf-8")       设置字符集

            .on( "data"/"readable", function (data){})

        cwd         执行 node 命令的时候 所在目录 ( current working dir)

        on      事件

            exit        退出

            SIGINT      signal interrupted

        argv        附加在命令行的参数  在命令行生效

            node process_argv.js argments( 利用空格分割)


2. 模块和包

    require()  ./   代表当前目录

    exports         导出该属性
