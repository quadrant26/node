/**
 * Created by Administrator on 2016/11/11.
 */

var express = require('express')
var path = require("path")
// 设置端口号
var port = process.env.PORT || 3000
var app = express()

// 设置视图目录
app.set('views', './views/pages')
// 设置默认的模板引擎
app.set('view engine', 'jade')

// app.use(express.bodyParser())
// app.use(express.static(path.join(__dirname, 'bower_components')))

var serveStatic = require('serve-static')
app.use(serveStatic(path.join(__dirname, 'bower_components')))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// 设置监听的端口
app.listen(port)

console.log('imooc start on port!' + port)

//加载 index page
app.get('/', function (req, res){
    res.render('index', {
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
    })
})

//加载 detail page
app.get('/movie/:id', function (req, res){
    res.render('detail', {
        title : 'imooc 详情页',
        movies : {
            doctor : '何塞·帕迪里亚',
            country : 'USA',
            title : '机械战警',
            year : 2014,
            poster : 'http://www.cinema.com.cn/upload/2014-02/14021817016385.jpg',
            language : '英语',
            flash : 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
            summary : '2028年，专事军火开发的机器人公司Omni Corp生产了大量装备精良的机械战警，他们被投入到维和和惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼饰）最前沿的技术，墨菲以机械战警的形态复活。数轮严格的测试表明，墨菲足以承担起维护社会治安的重任，他的口碑在民众中直线飙升，而墨菲的妻子克拉拉（艾比·考尼什饰）和儿子大卫却再难从他身上感觉亲人的温暖。感知到妻儿的痛苦，墨菲决心向策划杀害自己的犯罪头子展开反击。'
        }

    })
})

//加载 admin page
app.get('/admin/movie/', function (req, res){
    res.render('admin', {
        title : 'imooc 后台录入页',
        movie : {
            _id : '',
            title : '',
            doctor : '',
            country : '',
            year : '',
            poster : '',
            flash : '',
            summary : '',
            language : ''
        }
    })
})

//加载 list page
app.get('/admin/list', function (req, res){
    res.render('list', {
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
    })
})