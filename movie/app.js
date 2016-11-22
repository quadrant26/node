/**
 * Created by Administrator on 2016/11/11.
 */

var express = require('express')
var path = require("path")
// 导入数据库模块
var mongoose = require("mongoose")
var cookieParser = require("cookie-parser")
var session = require("express-session")
var mongoStore = require("connect-mongo")(session) // 将 session 保存到 mongodb 中
// 设置端口号
var port = process.env.PORT || 3000
var app = express()
// 数据格式化
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
// 设置默认目录
app.locals.moment = require('moment')
var serveStatic = require('serve-static')
app.use(serveStatic(path.join(__dirname, 'public')))

var morgan = require('morgan');


var Movie = require("./app/models/movie")
var User = require("./app/models/user")
var _ = require("underscore")
var dbUrl = 'mongodb://localhost/imooc' || "mongodb://localhost:27017/imooc";
// 连接 mongo
//mongoStore.connect(dbUrl)
// 连接数据库
mongoose.connect("mongodb://localhost:27017/imooc")

// 设置视图目录
app.set('views', './app/views/pages')
// 设置默认的模板引擎
app.set('view engine', 'jade')

// 设置session
app.use(cookieParser())
app.use(session({
    secret : 'imooc',
    store : new mongoStore({
        url : dbUrl,
        collection : 'sessions'
    })
}))

// 监听端口
app.listen(port)
if('development' === app.get('env')){
    app.set('showStackError', true)
    app.use(morgan(':method :url :status'))
    app.locals.pretty = true
    mongoose.set('debug', true)
}

require("./config/routes")(app)

console.log('imooc start on port!' + port)

