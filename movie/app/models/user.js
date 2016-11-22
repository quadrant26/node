/**
 * Created by Administrator on 2016/11/11.
 */

var mongoose = require('mongoose');
var UserSchema = require('../schemas/user');
var User = mongoose.model('User', UserSchema);

module.exports = User;



