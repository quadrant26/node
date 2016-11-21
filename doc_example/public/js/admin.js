/**
 * Created by Wang on 2016/11/12.
 */

$(function(){

    $(".del").click(function (e){

        alert(234)

        var target = $(e.target)
        var id = target.data('id')
        var tr = $('.item-id-' + id)

        $.ajax({
            type : 'DELETE',
            url : '/admin/list?id=' + id
        })
        .done(function (results){
            if(results.success === 1){
                if(tr.length > 0){
                    tr.remove()
                }
            }
        })
    })

})