$(document).ready(function() {

	$('.menu-trigger').click(function() {
        
        
        $(".hide-menu").toggle();
        $('li#nav').css('display','block');
        
        
    });
    
    $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 767) {
       $(".hide-menu, li#nav").css('display','inline-block');
    }
  });

});