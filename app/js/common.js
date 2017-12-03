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

$( "a#edit-user").click(function(){
    var data = $(this).data();
    $('#editUser').modal('show');
    $('#id-user').attr('value', data.key);
    $('#login').attr('value', "Админ");
    $('#email').attr('value', "123@mail.com");

});

$("#send-query").submit(function(){
    $.ajax({
        type: "GET",
        url: "send-query.php",
        data: $(this).serialize() 
    }).done(function(){
        alert("data");
    });
    return false;
});