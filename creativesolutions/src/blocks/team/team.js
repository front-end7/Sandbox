/**
 * @file Implementation of the team block
 */
import * as config from '../../js/vendor';

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the team block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
    const init = config.sliderConfig;

    const args = {
        ...init,
        dots: true,
        prevArrow: `.team__navigation--prev`,
        nextArrow: `.team__navigation--next`,
        dotsClass: 'team__pagination',
        slidesToShow: 3,
        dots: false,
        dotsClass: 'team__pagination',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            },
            {
              breakpoint: 479,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    };

    $('.team__slider').slick(args);
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
