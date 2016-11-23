/**
 * Created by Administrator on 2016/11/22.
 */

//var Comment = require("../models/comment")
var mongoose = require('mongoose')
var Comment = mongoose.model('Comment')

//comment
exports.save = function (req, res){

    var _comment = req.body.comment
    var movieId = _comment.movie

    if(_comment.cid){
        // 引用别的评论内容进行回复
        Comment.findById(_comment.cid, function (err, comment){
            var reply = {
                from : _comment.from,
                to : _comment.tid,
                content : _comment.content
            }
            console.log(comment.reply);
            comment.reply.push(reply)
            comment.save(function(err, comment){
                if(err){
                    console.log(err)
                }

                res.redirect('/movie/' + movieId)
            })
        })
    }else{
        // 单一的回复
        var comment = new Comment(_comment)
        comment.save(function (err, comment){
            if(err){
                console.log(err)
            }

            res.redirect('/movie/' + movieId)
        })
    }

}
