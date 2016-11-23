/**
 * Created by Administrator on 2016/11/22.
 */

var Index = require('../app/controllers/index')
var User = require('../app/controllers/user')
var Movie = require('../app/controllers/movie')
var Comment = require('../app/controllers/comment')

module.exports = function (app){

    // pre handle user
    app.use(function (req, res, next){
        var _user = req.session.user

        app.locals.user = _user

        next()

    })

    //加载 index page
    app.get('/', Index.index)
    // signup
    app.post('/user/signup', User.signup)
    // signin
    app.post('/user/signin', User.signin)
    app.get('/signin', User.showSignin)
    app.get('/signup', User.showSignup)
    // 登出 logout
    app.get('/logout', User.logout)
    // 加载 userlist page
    //app.get('/admin/userlist', User.list())
    app.get('/admin/user/list', User.signinRequired, User.adminRequired, User.list)

    //加载 detail page
    app.get('/movie/:id', Movie.detail)
    // 从表单提交的数据 admin post movie
    //app.post('/admin/movie/new', Movie.new)
    // admin update movie
    //app.get('/admin/movie/update/:id', Movie.update)
    //加载 add movie page
    //app.get('/admin/movie/', Movie.save)
    //加载 list page
    //app.get('/admin/movie/list', Movie.list)
    // 删除一条数据
    //app.delete('/admin/movie/list', Movie.del)

    app.post('/admin/movie/new', User.signinRequired, User.adminRequired, Movie.new)
    app.get('/admin/movie/update/:id', User.signinRequired, User.adminRequired,  Movie.update)
    app.get('/admin/movie', User.signinRequired, User.adminRequired, Movie.save)
    app.get('/admin/movie/list', User.signinRequired, User.adminRequired, Movie.list)
    app.delete('/admin/movie/list', User.signinRequired, User.adminRequired, Movie.del)

    // comment
    app.post('/user/comment', User.signinRequired, Comment.save)

}