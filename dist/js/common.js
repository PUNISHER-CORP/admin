/*Menu toogle*/
$(document).ready(function() {
        $('#text').summernote({
            lang: 'ru-RU',
            height: 300
        });
});

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

$( "a#edit-user").click(function(){
    var show = $(this).data();
    $('#editUser').modal('show');
    $('#id-user').attr('value', show.id);
    $('#nick').attr('value', show.nick);
    $('#email').attr('value', show.email);

});