/**
 * @file Implementation of the nav block
 */

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
 * Initialize the nav block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
    $('.nav').on('click', '.nav__burger', function (event) {
        $(event.target).find('.fa-bars').toggleClass('d-none');
        $(event.target).find('.fa-times').toggleClass('d-none');
        $('.nav__list').slideToggle();
    });
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
