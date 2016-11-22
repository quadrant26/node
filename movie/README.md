node + mongodb 建站

1. 自动重启服务

    npm install grunt -g

    npm install grunt-cli -g

    npm install --save-dev grunt-contrib-watch grunt-concurrent grunt-nodemon

    启动 grunt 服务  cmd 当前目录直接运行 grunt 命令

2. 页面结构

    localhost:3000

        /                           index

        /movie/:id                  电影详细页

        /signin                     登录

        /signup                     注册

        /admin/movie                电影录入页

        /admin/movie/list           电影列表页

        /admin/movie/update/:id     电影信息修改页



