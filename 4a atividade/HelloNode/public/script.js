$(document).ready(function(){
    $('.change > button').click(function(){
        $.get("http://localhost:8000/list_users", function(data){
            $('.change > p').html(data);
        });
    });
});