$(document).ready(function(){
    $('.slider1').slick();

    $('.slider2').slick({
        vertical: true,
        verticalSwiping: true
    });

    $('.slider3').slick();
    $('.slider3').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // var currentSlide = $('.slider3').slick('slickCurrentSlide');
        $('.currentSlide').text(nextSlide + 1);
    })
});