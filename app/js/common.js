/*Menu toogle*/

$( "a#menu-toggle" ).click(function() {
    
    $( "#sidebar-wrapper").toggleClass("hide");
    $(".hide-md").toggleClass("hide-md");
    $( "#page-content-wrapper").toggleClass("pl-none");
    $( ".logo").toggleClass("hide");
    $( ".left-part").toggleClass("show-logo");
});