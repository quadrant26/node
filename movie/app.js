/**
 * Created by Administrator on 2016/11/11.
 */

var express = require('express')
var path = require("path")
// 导入数据库模块
var mongoose = require("mongoose")
var Movie = require("./models/movie")
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

    /*res.render('index', {
        title : 'imooc 首页',
        movies : [
            {
                title:'机械战警',
                _id : 1,
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg'
            },
            {
                title:'机械战警',
                _id : 2,
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg'
            },
            {
                title:'机械战警',
                _id : 3,
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg'
            },
            {
                title:'机械战警',
                _id : 4,
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg'
            },
            {
                title:'机械战警',
                _id : 5,
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg'
            },
            {
                title:'机械战警',
                _id : 6,
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg'
            }

        ]
    })*/
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

    /*res.render('detail', {
        title : 'imooc 详情页',
        movie : {
            doctor : '何塞·帕迪里亚',
            country : 'USA',
            title : '机械战警',
            year : 2014,
            poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg',
            language : '英语',
            flash : 'http://js.kankan.com/player/mp4/KKPlayer2.2.swf?v=5.6&popup=1',
            summary : '2028年，专事军火开发的机器人公司Omni Corp生产了大量装备精良的机械战警，他们被投入到维和和惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼饰）最前沿的技术，墨菲以机械战警的形态复活。数轮严格的测试表明，墨菲足以承担起维护社会治安的重任，他的口碑在民众中直线飙升，而墨菲的妻子克拉拉（艾比·考尼什饰）和儿子大卫却再难从他身上感觉亲人的温暖。感知到妻儿的痛苦，墨菲决心向策划杀害自己的犯罪头子展开反击。'
        }
    })*/
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

    /*res.render('list', {
        title : 'imooc 列表页',
        movies : [
            {
                title:'机械战警',
                _id : 1,
                doctor : '何塞·帕迪里亚',
                country : 'USA',
                flash : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf ',
                summary : '2028年，专事军火开发的机器人公司Omni Corp生产了大量装备精良的机械战警，他们被投入到维和和惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼饰）最前沿的技术，墨菲以机械战警的形态复活。数轮严格的测试表明，墨菲足以承担起维护社会治安的重任，他的口碑在民众中直线飙升，而墨菲的妻子克拉拉（艾比·考尼什饰）和儿子大卫却再难从他身上感觉亲人的温暖。感知到妻儿的痛苦，墨菲决心向策划杀害自己的犯罪头子展开反击。',
                poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg',
                year : '2012',
                language : '英语'
            }
        ]
    })*/
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