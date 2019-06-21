import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';
import 'swiper';
import '@fortawesome/fontawesome-free';
import loadGoogleMapsApi from 'load-google-maps-api';

// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;

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