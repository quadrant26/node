/**
 * Created by Administrator on 2016/11/11.
 */

var express = require('express')
var path = require("path")
// 导入数据库模块
var mongoose = require("mongoose")
var Movie = require("./models/movie")
var User = require("./models/user")
var _ = require("underscore")

// 设置端口号
var port = process.env.PORT || 3000
var app = express()

app.locals.moment = require('moment')

// 连接数据库
mongoose.connect("mongodb://localhost:27017/imooc")

// 设置视图目录
app.set('views', './views/pages')
// 设置默认的模板引擎
app.set('view engine', 'jade')

// app.use(express.bodyParser())
// app.use(express.static(path.join(__dirname, 'bower_components')))

// 设置默认目录
var serveStatic = require('serve-static')
app.use(serveStatic(path.join(__dirname, 'public')))
// 数据格式化
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// 设置监听的端口
app.listen(port)

console.log('imooc start on port!' + port)

//加载 index page
app.get('/', function (req, res){

    Movie.fetch(function (err, movies){
        if(err){
            console.log(err)
        }

        res.render('index', {
            title : 'imooc 首页',
            movies : movies
        })
    })
})

// signup
app.post('/user/signup', function (req, res){
    var _user = req.body.user;
    var user = new User(_user)

    // 判断用户名是否存在
    User.findOne({name : _user.name}, function (err, user){
        if(err){
            console.log(err)
        }
        // 已经存在
        if(user){
            return res.redirect('/')
        }else{ // 用户名不存在
            user.save(function (err, user){
                if(err){
                    console.log(err)
                }
                res.redirect("/admin/userlist")
                console.log(user)
            })
        }
    });

})

// signin
// signup
app.post('/user/signin', function (req, res){
    var _user = req.body.user;
    var name = _user.name
    var password = _user.password


    // 判断用户名是否存在
    User.findOne({name : name}, function (err, user){
        if(err){
            console.log(err)
        }
        // 用户不存在
        if(!user){
            return res.redirect('/')
        }

        user.comparePassword(password, function (err, isMatch){
            if(err){
                console.log(err)
            }

            if(isMatch){
                return res.redirect('/')
            }else{
                console.log('Password is not matched');
            }
        });
    });

})

// 加载 userlist page
app.get('/admin/userlist', function (req, res){

    Movie.fetch(function (err, movies){
        if(err){
            console.log(err)
        }

        res.render('userlist', {
            title : 'imooc 用户列表页',
            movies : movies
        })
    })
})

//加载 detail page
app.get('/movie/:id', function (req, res){

    var id = req.params.id
    Movie.findById(id, function (err, movie){
        if(err){
            console.log(err)
        }

        res.render('detail', {
            title : 'imooc' + movie.title,
            movie : movie
        })
    })
})

//加载 admin page
app.get('/admin/movie/', function (req, res){

    res.render('admin', {
        title : 'imooc 后台录入页',
        movie : {
            _id : '',
            title : '港囧',
            doctor : '徐铮',
            country : '中国',
            year : '2015',
            poster : 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2390670272,2122151632&fm=58',
            flash : 'http://static.youku.com/v20161110.0/v/swf/player_yknpsv.swf',
            summary : '《港囧》是由北京真乐道文化传播有限公司、北京光线影业有限公司等联合出品的爱情喜剧影片，该影片由徐峥执导，由徐峥、赵薇、包贝尔、杜鹃、葛民辉联合主演。影片于2015年9月25日在全国上映。影片讲述了徐来陪伴老婆及家人来到香港旅游',
            language : '中文'
        }
    })
})

// admin update movie
app.get('/admin/update/:id', function (req, res){
    var id = req.params.id

    if(id){
        Movie.findById(id, function (err, movie){
            res.render('admin', {
                title : 'imooc 后台更新页',
                movie : movie
            })
        })
    }
})

// 从表单提交的数据 admin post movie
app.post('/admin/movie/new', function (req, res){

    var id = req.body.movie._id
    var movieObj = req.body.movie
    var _movie;

    if(id !== 'undefined' && id !== "" && id !== null){
        Movie.findById(id, function (err, movie){
            if(err){
                console.log(err)
            }

            _movie = _.extend(movie, movieObj)
            _movie.save(function (err, movie){
                if(err){
                    console.log(err)
                }

                res.redirect('/movie/' + movie._id)
            })
        })
    }else{
        _movie = new Movie({
            doctor : movieObj.doctor,
            title : movieObj.title,
            country : movieObj.country,
            language : movieObj.language,
            poster : movieObj.poster,
            year : movieObj.year,
            summary : movieObj.summary,
            flash : movieObj.flash
        })

        _movie.save(function (err, movie){
            if(err){
                console.log(err)
            }

            res.redirect('/movie/' + movie._id)
        })
    }
})


//加载 list page
app.get('/admin/list', function (req, res){

    Movie.fetch(function (err, movies){
        if(err){
            console.log(err)
        }

        res.render('list', {
            title : 'imooc 列表页',
            movies : movies
        })
    })
})

// 删除一条数据

app.delete('/admin/list', function (req, res){
    var id = req.query.id

    if(id){
        Movie.remove({_id:id}, function (err, movie){
            if(err){
                console.log(err)
            }
            else{
                res.json({success : 1})
            }
        })
    }
})