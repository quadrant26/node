/**
 * Created by Administrator on 2016/11/9.
 */

var http = require("http")
var cheerio = require("cheerio")
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html){
    var $ = cheerio.load(html)
    var chapters = $('.chapter')

    /*[{
        chapterTitle : "",
        videos : [
            title : '',
            id : ''
        ]
    }]*/

    var courseData = []

    chapters.each(function (item){
        var chapter = $(this)
        var chapterTitle = chapter.find("strong").text()
        console.log(chapterTitle);
        var videos = chapter.find(".video").children("li")
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }

        videos.each(function (item){
            var video = $(this).find(".J-media-item")
            var videoTitle = video.text()
            console.log(videoTitle)
            var id = video.attr('href').split("video/")[1]

            chapterData.videos.push({
                title : videoTitle,
                id : id
            })
        })

        courseData.push(chapterData)
    })

    return courseData
}

function printCourseInfo(coureData){
    coureData.forEach(function (item){
        var chapterTitle = item.chapterTitle
        //console.log(chapterTitle + '\n');

        item.videos.forEach(function (video){
            //console.log("【" + video.id + "】 :" + video.title)
        })
    })
}

http.get(url, function (res){
    var html = ''

    res.on('data', function (data){
        html += data
    })

    res.on('end', function (){
        var coureData = filterChapters(html)
        printCourseInfo(coureData)
    })

}).on('error', function (){
    console.log("获取课程数据出错！")
})
