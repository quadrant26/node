/**
 * Created by Administrator on 2016/11/22.
 */

var Category = require("../models/category")

// category new
exports.new = function (req, res){

    res.render('category_admin', {
        title : "后台分类录入页",
        category : {}
    })

}

// category save
exports.save = function (req, res){

    var _category = req.body.category
    var category = new Category(_category)

    category.save(function (err, category){
        if(err){
            console.log(err)
        }

        res.redirect('/admin/category/list')
    })
}

// category list
exports.list = function (req, res){

    Category.fetch(function (err, categories){
        if(err){
            console.log(err)
        }

        res.render('categorylist', {
            title : 'imooc 分类列表页',
            categories : categories
        })
    })
}
