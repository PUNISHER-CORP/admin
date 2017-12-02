/*Menu toogle*/

$( "a#menu-toggle" ).click(function() {
    if ($(window).width() <= 767){
        if ( $("#sidebar-wrapper").hasClass("hide-md") ) {
            $('#sidebar-wrapper').removeClass('hide-md');

        } 
        else{
            $( "#sidebar-wrapper").toggleClass("hide");
            $(".hide-md").toggleClass("hide-md");
            $( "#page-content-wrapper").toggleClass("pl-none");
            $( ".logo").toggleClass("hide");
            $( ".left-part").toggleClass("show-logo");   
        }
    }
    else{
        $( "#sidebar-wrapper").toggleClass("hide");
        $(".hide-md").toggleClass("hide-md");
        $( "#page-content-wrapper").toggleClass("pl-none");
        $( ".logo").toggleClass("hide");
        $( ".left-part").toggleClass("show-logo");   

    }
});