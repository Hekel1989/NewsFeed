//GET request from NewsAPI

$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: '/appController',
        success : function(data){
            console.log(data);
        }
    });
    return false;
});
