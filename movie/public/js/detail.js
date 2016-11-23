/**
 * Created by Administrator on 2016/11/23.
 */

$(function(){

    $(".comment").click(function (e){

        var target = $(this)
        var toId = target.data('tid')
        var commentId = target.data('cid')

        if( $("#toId").length > 0){
            $("#toId").val(toId)
        }else{
            $('<input>').attr({
                type : "hidden",
                id : 'toId',
                name : 'comment[tid]',
                value : toId
            }).appendTo("#commentForm")

            $('<input>').attr({
                type : "hidden",
                id : 'commentId',
                name : 'comment[cid]',
                value : commentId
            }).appendTo("#commentForm")
        }

        if( $("#commentId").length > 0){
            $("#commentId").val(commentId)
        }else{
            $('<input>').attr({
                type : "hidden",
                id : 'toId',
                name : 'comment[tid]',
                value : toId
            }).appendTo("#commentForm")

            $('<input>').attr({
                type : "hidden",
                id : 'commentId',
                name : 'comment[cid]',
                value : commentId
            }).appendTo("#commentForm")
        }
    })


    /*$("#submit_comment").on('click', function (){

        var content = $('textarea[name="comment[content]"]').val()
        var movie = $('input[name="comment[movie]"]').val()
        var from = $('input[name="comment[from]"]').val()

        console.log(content, movie, from)

        if( $("#toId").is() && $("#commentId").is() ){
            alert(123)
            $.ajax({
                type : 'post',
                url : "/user/comment",
                data : {
                    "movie" : movie,
                    "content" : content,
                    "from" : from
                },
                success : function (data){
                    console.log(data)
                }
            })
        }else{

            $.ajax({
                type : 'post',
                url : "/user/comment",
                data : {
                    "movie" : movie,
                    "content" : content,
                    "from" : from
                },
                success : function (data){
                    console.log(data)
                },
                error : function (err){
                    console.log(err)
                }
            })
        }
    })*/

})