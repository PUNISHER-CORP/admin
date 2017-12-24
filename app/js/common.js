/*Menu toogle*/
$(document).ready(function() {
    $('#text').summernote({
        lang: 'ru-RU',
        height: 300
    });


});

$( "a#menu-toggle" ).click(function() {
    var sideBar = $( "#sidebar-wrapper");
    if ($(window).width() <= 767){
        if ( sideBar.hasClass("hide-md") ) {
            sideBar.removeClass('hide-md');
        } 
        else{
            sideBar.toggleClass("hide");
            $(".hide-md").toggleClass("hide-md");
            $( "#page-content-wrapper").toggleClass("pl-none");
            $( ".logo").toggleClass("hide");
            $( ".left-part").toggleClass("show-logo");   
        }
    }
    else{
        
        var InAnimation = "animated bounceInLeft";
        var OutAnimation = "animated bounceOutLeft";
        if(sideBar.hasClass(OutAnimation)){
            sideBar.removeClass(OutAnimation).addClass(InAnimation);
        }else{
                sideBar.removeClass(InAnimation);
                sideBar.addClass(OutAnimation);        
            
        
        }
        $(".hide-md").toggleClass("hide-md");
        $( "#page-content-wrapper").toggleClass("pl-none");
        $( ".logo").toggleClass("hide");
        $( ".left-part").toggleClass("show-logo");   

    }
});

$( "a#edit-user").click(function(){
    var show = $(this).data();
    $('#editUser').modal('show');
    $('#id-user').attr('value', show.id);
    $('#nick').attr('value', show.nick);
    $('#email').attr('value', show.email);

});
/*Animated*/
$('li#drop-user').click(function(){


    $('ul.dropdown-menu-right').addClass('animated bounceInUp');

});
$('li#message').click(function(){
    $('ul.mail').addClass('animated bounceInDown');
});


