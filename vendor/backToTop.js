$(document).ready(function() {
    $('#back-top').hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $('#back-top').fadeIn(1000);
        } else {
            $("#back-top").fadeOut(1000);
        }
    });

    $("#back-top").click(function() {
       $('html,body').animate({ scrollTop: 0 }, 1500);
    });

    //主選單行動裝置Bar
    $("#bar-nav").click(function() {
        $("#bar-nav").toggleClass("openbar");
        $("#nav-wrap").toggleClass("triggered");
        $(".sidebtn").toggleClass("sideopacity");
    });

    
});