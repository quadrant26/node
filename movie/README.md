node + mongodb 建站

1. 安装模块

    npm install express

    npm install jade

    npm install mongoose

    npm install bower -g

    bower install bootstrap

2. 文件目录结构

    - doc_example

        - node_modules/

        - bower_components/

        - views/

            - index.jade

            - detail.jade

            - admin.jade

            - list.jade

        - app.js

3. 测试

    - localhost:3000

    - localhost:3000/movie/{id}

    - localhsot:3000/admin/movie

    - localhost:3000/admin/list

    - localhost:3000/admin/update/id

4. 样式开发

    - views/

        - includes/

            - header.jade

        - pages/

            - index.jade

            - detail.jade

            - admin.jade

            - list.jade

        - layout.jade

    新版express4中，要独立安装static，npm install serve-static --save

    在app.js中，

    var serveStatic = require('serve-static')

    app.use(serveStatic('bower_components')

    bodyParser 已经不再与Express捆绑，需要独立安装。

    命令行执行：npm install body-parser

    程序中修改：

    var bodyParser = require('body-parser')

    app.use(bodyParser.urlencoded())

5. Model 编译模型

    var mongoose = require("mongoose")

    var MovieSchema = require("../schemas/movie")

    var Movie = mongoose.model('movie', 'movieScachema')

    module.exports = Movie

6. Documents 文档实例化

    var movie = new Movie({})

    movie.save(function (err){ if(err){ return handleError(err) }})

7. 数据库查询

    批量查询

    app.get('/', function (req, res){
        Movie.
            find({})
            .exec(function (err, movies){
                res.render('index', {
                    title : ....
                })
            })
    })

    单条查询

        Movie
            .findOne({_id : id})
            .exec(...)

    删除

        Movie
            .remove({_id : id}, function (err, movie))

8.后端逻辑

    - doc_example

        - node_modules/

        - bower_components/

        - views/

            - *.jade、

        - models/

            - movie.js

        - schemas/

            - movie.js

        - app.js

9. 数据 mongodb

    mongo

    use dbname

    db.movies.find({})

    db.movies.find({}).count()

    db.movies.remove()

10. bower 安装模块到指定的目录

    在项目根下创建一个名为.bowerrc 的文件然后

    {
      "directory" : "public/components"
    }

11. 前端配置文件 bower init

12. 后端配置文件 npm init
