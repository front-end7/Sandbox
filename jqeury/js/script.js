$(document).ready(function () {
    
    $('#hideFirst').on('click', function () {
        $('#one').hide();
        $(this).text('firstIsHidden');
        $('#two').animate({
            fontSize: '24px'
        }, 1500)
    });

    $('nav').on('click', 'a', function () {
        event.preventDefault();

        var current = $(this).attr('href');

        var offsetTop = $(current).offset().top;

        $("html, body").animate({
            scrollTop: offsetTop + 'px'
        }, 1500);
    })

})