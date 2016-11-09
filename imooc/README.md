Nodejs 模块

1. 导出模块

    exports.name = name

2. 引入模块

    mudule = require(name)

3. 使用模块的方法

    mudule.method()

Nodejs API

1. URL 解析

    url.format(urlObject)

    url.resolve(from, to)

    url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

        第二个参数 true 返回一个 object 对象

        第三个参数 true 解析 host 和 pathname 分别解析

    URL Strings and URL Objects

        urlObject.href

        urlObject.protocol

        urlObject.slashes

        urlObject.host

        urlObject.auth

        urlObject.hostname

        urlObject.port

        urlObject.pathname

        urlObject.search

        urlObject.path

        urlObject.query

        urlObject.hash

2. QueryString 处理

    querystring = require("querystring")

    querystring.stringify({json})

    querystring.stringify({}, ',')          第二个参数 看字符串每个键值对是以什么分隔的

    querystring.stringify({}, ',', ':')     第三个参数 看字符串中 键和值用什么来进行分隔的

    querystring.parse(str)

    querystring.parse(str, ",")             第二个参数 看字符串每个键值对是以什么分隔的

    querystring.parse(str, ",", ":")        第三个参数 看字符串中 键和值用什么来进行分隔的

    querystring.escape({})      // 转义

    querystring.unescape({})

3. HTTP 爬虫

    cheerio.load()

    http.request(options[, callback])

4. 事件

    var EventEmitter = require("events").EventEmitter

    var life = new EventEmitter()

    添加事件

        life.on(eventname, fn)

    设置函数运行对打次数

        life.setMaxListeners(num)

    移除事件  (不能移除匿名函数)

        removeListener(eventname, fn)

    批量移除事件

        removeAllListeners()        如果不传事件的名称，则移除全部事件

    查看事件的次数

        life.listeners(eventname).length 如果不传事件名称，返回 0