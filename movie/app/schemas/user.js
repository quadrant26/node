/**
 * Created by Administrator on 2016/11/11.
 */

var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var SALT_WORK_FACTOR = 10

var UserSchema = new mongoose.Schema({
    name : {
        unique : true,
        type : String
    },
    password : String,
    // user(0) || admin(1) || super admin(2)
    // normal(0) || verified user(1) ||  professonal user(3)
    role : {
        type : Number,
        default : 0
    },
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

UserSchema.pre('save', function(next){
    var user = this;

    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else{
        this.meta.updateAt = Date.now()
    }

    /*
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt){
        if(err)return next(err)

        bcrypt.hash(user.password, salt, function (err, hash){
            if(err)return next(err)

            user.password = hash
            next()
        })
    })*/
    
    bcrypt.hash(user.password, null, null, function (err, hash){
        if (err) {
            return next(err)
        }
        user.password = hash
        next()
    })
})

UserSchema.methods = {
    comparePassword : function (_password, cb){
        bcrypt.compare(_password, this.password, function (err, isMatch){
            if(err)return cb(err)

            cb(null, isMatch)
        })
    }
}
/*UserSchema.methods = {
    comparePassword: function (_password, cb) {
        var hash = this.password;
        var isMatch = bcrypt.compareSync(_password, hash);
        cb(null, isMatch);
    }
};*/

UserSchema.statics = {
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

module.exports = UserSchema