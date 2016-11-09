/**
 * Created by Administrator on 2016/11/9.
 */

var EventEmitter = require("events").EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

// addEventListener

life.on('求安慰', function (who){
    console.log('给' + who + '倒水')
})

life.on('求安慰', function (who){
    console.log('给' + who + '洗衣服')
})

life.on('求安慰', function (who){
    console.log('给' + who + '聊天')
})

life.on('求安慰', function (who){
    console.log('给' + who + '做饭')
})

life.on('求安慰', function (who){
    console.log('给' + who + '...5')
})

life.on('求安慰', function (who){
    console.log('给' + who + '...6')
})

life.on('求安慰', function (who){
    console.log('给' + who + '...7')
})

life.on('求安慰', function (who){
    console.log('给' + who + '...8')
})

life.on('求安慰', function (who){
    console.log('给' + who + '...9')
})

life.on('求安慰', function (who){
    console.log('给' + who + '...10')
})

life.on('求安慰', function (who){
    console.log('给' + who + '你想累死我啊')
})

// life.emit('求安慰', '汉子')

var hasConforListener = life.emit('求安慰', '汉子')
var hasLovedListener = life.emit('求溺爱', '妹子')
var hasPlayedListener = life.emit('求玩坏', '汉子和妹子')

console.log(hasConforListener)  // true
console.log(hasLovedListener)   // false
console.log(hasPlayedListener)  // false