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
    prevArrow: () => `.${this.name}__navigation--prev`,
    nextArrow: () => `.${this.name}__navigation--next`,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }
    ],
    name: ''
};

export default {
    sliderConfig,
};


// Manually initialize third-party libraries
svg4everybody();


// const loadGoogleMapsApi = require('load-google-maps-api')
 
// loadGoogleMapsApi().then(function (googleMaps) {
//   new googleMaps.Map(document.querySelector('.map'), {
//     center: {
//       lat: 40.7484405,
//       lng: -73.9944191
//     },
//     zoom: 12
//   })
// }).catch(function (error) {
//   console.error(error)
// })