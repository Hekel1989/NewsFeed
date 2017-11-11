//GET request from NewsAPI

$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: '/appController',
        success : function(data){
            //Now use jQuery to find and create elements on our frontpage and append data off the retrieve JSON to those elements
            console.log(data);
        }
    });
    return false;
});
