$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
            disabledClass: 'button-disable'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    })
  });