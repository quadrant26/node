/**
 * Created by Administrator on 2016/11/22.
 */

var Movie = require("../models/movie")
var Category = require("../models/category")

// 首页交互
//加载 index page
exports.index = function (req, res){

    Category
        .find({})
        .populate({path:'movies', options : {limit : 5}})
        .exec(function (err, categories){
            if(err){
                console.log(err)
            }

            res.render('index', {
                title : 'imooc 首页',
                categories : categories
            })
        })

    /*Movie.fetch(function (err, movies){
        if(err){
            console.log(err)
        }

        res.render('index', {
            title : 'imooc 首页',
            movies : movies
        })
    })*/
}

exports.search = function (req, res) {
    var catId = req.query.cat
    var q = req.query.q
    var page = parseInt(req.query.p, 10) || 0
    var count = 2
    var index = (page + 0) * count

    if(catId){
        Category
            .find({_id : catId})
            .populate({
                path: 'movies',
                select : 'title poster'//,
                //options: {limit: 6, skip :index}
            })
            .exec(function (err, categories) {
                if (err) {
                    console.log(err)
                }

                var category = categories[0] || {}
                var movies = category.movies || []
                var results = movies.slice(index, index+count)

                res.render('results', {
                    title: 'imooc 结果列表页',
                    keyword : category.name,
                    currentPage : (page + 1),
                    query : 'cat=' + catId,
                    totalPage : Math.ceil(movies.length/2),
                    movies: results
                })
            })
    }else{
        Movie
            .find({name : new RegExp(q+'.*', 'i')})
            .exec(function (err, movies){
                if (err) {
                    console.log(err)
                }

                var results = movies.slice(index, index+count)

                res.render('results', {
                    title: 'imooc 结果列表页',
                    keyword : q,
                    currentPage : (page + 1),
                    query : 'q=' + q,
                    totalPage : Math.ceil(movies.length/2),
                    movies: results
                })
            })
    }

}