$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($('#carouselButton').children('i').hasClass('fa-pause')) { 
            //Check if the button has a child node i with the class fa-pause
            $('.carousel').carousel('pause');
            $('#carouselButton').children('i').removeClass('fa-pause'); 
            $('#carouselButton').children('i').addClass('fa-play');
            //remove then add class to switch out pause to play icon on font awesome
        } else {
            $('.carousel').carousel('cycle');
            $('#carouselButton').children('i').removeClass('fa-play');
            $('#carouselButton').children('i').addClass('fa-pause');
        } 
    });

//reserve button modal activation
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('toggle');
    });

//login button modal activation
    $("#loginButton").click(function(){
        $('#loginModal').modal('toggle');
    });

});

