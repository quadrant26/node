/**
 * Created by Administrator on 2016/11/9.
 */

var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content' : '评论内容',
    'cid' : 348
})
var options = {
    hostname : 'www.imooc.com',
    port : 80,
    path : '/course/documment',
    method : 'POST',
    headers : {
        'Accept' : 'application/json, text/javascript, */*, q=0.01',
        'Accept-Encoding' : 'gzip, deflate',
        'Accept-Language' : 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
        'Cache-Control' : 'max-age=0',
        'Connection' : 'keep-alive',
        'Content-Length' : '0',
        'Cookie' : 'imooc_uuid=71d520f7-6e1b-4c6f-9a83-bc387aaf7d7d; imooc_isnew=1; imooc_isnew_ct=1478597846; loginstate=1; apsid=U1ZGJiN2EzOWVjNmYyMzYwNjQ3NTQxMTZhNDE0OWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTE1OTg0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzaHVjaGFuZ2FuZ2VsQHNpbmEuY29tAAAAAAAAAAAAADQwZDQ1YmFiMzdiN2UwYzlkNjgyYzE0NzhhNGEyYzcxP50hWD%2BdIVg%3DZG; last_login_username=shuchangangel%40sina.com; PHPSESSID=cuht9ifrcphnmdfbdrhcpbraj0; cvde=58229e881e948-35; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1478154653,1478597853,1478659071,1478663819; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1478680085; IMCDNS=0',
        'Host' : 'www.imooc.com',
        'Origin' : 'http://www.imooc.com',
        'Referer' : 'http://www.imooc.com/learn/348',
        'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
        'X-Requested-With' : 'XMLHttpRequest'
    }
}
var req = http.request(options, function (res){
    console.log('Status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers))

    res.on('data', function (chunk){
        console.log(buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end', function (){
        console.log('评论完毕')
    })

    res.on('error', function (e){
        console.log("Error:" + e.message)
    })

    req.write(postData)

    req.end()
})
