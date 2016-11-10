/**
 * Created by Administrator on 2016/11/10.
 */

var fs = require('fs')
var source = fs.readFileSync('logo.png')

fs.writeFileSync('steam_copy_logo.png', source)

