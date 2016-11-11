/**
 * Created by Administrator on 2016/11/11.
 */

var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema({
    doctor : String,
    titlr : String,
    language : String,
    counrty : String,
    summary : String,
    flash : String,
    poster : String,
    year : String,
    year : Number,
    meta : {
        createAt : {
            type : Date,
            default : Date.now()
        },
        updateAt : {
            type : Date,
            default : Date.noe()
        }
    }
})

MovieSchema.pre('save', function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else{
        this.mata.updateAt = Date.now()
    }

    next()
})

MovieSchema.statics = {
    // 取出数据库所有数据
    fetch : function (cb){
        return this
            .find({})
            .sort({'meta.updateAt'})
            exec(cb)
    },
    findById : function (id, cb){
        return this
            .findOne({_id : id})
            exec(cb)
    }
}

module.exports = MovieSchema