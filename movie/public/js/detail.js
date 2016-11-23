/**
 * Created by Administrator on 2016/11/23.
 */

$(function(){

    $(".comment").click(function (e){

        var target = $(e.target)
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

})