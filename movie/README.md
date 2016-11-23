node + mongodb 建站

1. 自动重启服务

    npm install grunt -g

    npm install grunt-cli -g

    npm install --save-dev grunt-contrib-watch grunt-concurrent grunt-nodemon

    启动 grunt 服务  cmd 当前目录直接运行 grunt 命令

2. 项目所有内容

    a. node 模块

        bcrypy-nodejs   body-parser     connect-mongo      cookie-parser    secape-html     express-session     express     grunt   grunt-current   grunt-contrib-watch     grunt-nodemon   jade    moment  mongoose    morgan      serve-static    undersore

    b. 数据库

        mongodb     ( 可视化工具 robomongo )

3. 页面结构

    localhost:3000

        /                           index

        /signin                     登录

        /signup                     注册

        /admin/movie/new            电影录入页

        /admin/movie/list           电影列表页 ( 可以对进行电影查看详细内容、更新和删除的操作 )

            /admin/movie/update/:id     电影信息修改页

            /movie/:id                  电影详细页

        /admin/user/list            管理员列表页( 需要 role 大于10 才能进入 )



