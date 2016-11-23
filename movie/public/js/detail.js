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

    /*
    $("#submit_comment").on('click', function (){

        console.log($("#commentForm").is("#toId"))
        console.log($("#toId").val())

        if( $("#toId").val() != "" && $("#commentId").val() != ""){

            $.ajax({
                type : 'post',
                url : "/user/comment",
                data : {},
                success : function (data){

                }
            })
        }else{
            console.log($("textarea[name='comment[content]']").text())
            $.ajax({
                type : 'post',
                url : "/user/comment",
                data : {
                    "content" : $("textarea[name='comment[content]']").text()
                },
                success : function (data){
                    console.log(data)
                }
            })
        }
    })
    */
    /*function getcomments(){
        alert(123)
        return false
    }*/

})