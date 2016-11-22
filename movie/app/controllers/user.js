/**
 * Created by Administrator on 2016/11/22.
 */

var User = require("../models/user")

// 注册页面
exports.showSignup = function (req, res){
    console.log(req);
    res.render('signup', {
        title : '注册页面'
    })
}
exports.showSignin = function (req, res){
    res.render('signin', {
        title : '登录页面'
    })
}
// signup
exports.signup = function (req, res){
    var _user = req.body.user;
    //var user = new User(_user)

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
}

// signin
exports.signin = function (req, res){
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
            return res.redirect('/signup')
        }

        user.comparePassword(password, function (err, isMatch){
            if(err){
                console.log(err)
            }

            if(isMatch){
                req.session.user = user

                return res.redirect('/')
            }else{
                return res.redirect('/signin')
                console.log('Password is not matched');
            }
        });
    });

}

// 登出 logout
exports.logout = function (req, res){

    delete req.session.user
    delete req.locals.user

    res.redirct('/')
}


// 加载 userlist page
exports.list = function (req, res){
    var user = req.session.user
    User.fetch(function (err, movies){
        if(err){
            console.log(err)
        }

        res.render('userlist', {
            title : 'imooc 用户列表页',
            users : users
        })
    })
}
// 普通用户
exports.signinRequired = function (req, res, next){
    var user = req.session.user
    if(user){
        return res.redirect("/signin")
    }
    next()
}
// 管理员
exports.adminRequired = function (req, res, next){
    var user = req.session.user
    if(user <= 10 ){
        return res.redirect("/signin")
    }
    next()
}