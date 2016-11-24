/**
 * Created by Administrator on 2016/11/11.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var CategorySchema = new Schema({
    name : String,
    movies : [{type : ObjectId, ref : 'Movie'}],
    meta : {
        createAt : {
            type : Date,
            default : Date.now()
        },
        updateAt : {
            type : Date,
            default : Date.now()
        }
    }
})

CategorySchema.pre('save', function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else{
        this.meta.updateAt = Date.now()
    }

    next()
})

CategorySchema.statics = {
    // 取出数据库所有数据
    fetch : function (cb){
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById : function (id, cb){
        return this
            .findOne({_id : id})
            .exec(cb)
    }
}

module.exports = CategorySchema