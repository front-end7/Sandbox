import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';
// import Swiper from 'swiper';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import 'load-google-maps-api';
import 'slick-carousel';

// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;

const sliderConfig = {
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }
    ]
};

export default {
    sliderConfig,
};


// Manually initialize third-party libraries
svg4everybody();