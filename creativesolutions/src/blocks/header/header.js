/**
 * @file Implementation of the header block
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
 * Initialize the header block.
 * @return true if the block is present on the page, false otherwise
 */
function Scrolled() {
    // TODO: add code here
    $('.header').addClass('header--scrolled');
}

function NotScrolled() {
    $('.header').removeClass('header--scrolled');
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    Scrolled,
    NotScrolled
};
