$(document).ready(function () {
    
    var trackWidth = 0;
    $('img').each(function () {
        trackWidth += $(this).width();
    });

    $('#track').css('width', `${trackWidth}px`);

    var currentPosition = 0;

    function Move() {

        var offset = 0;

        $('img').each(function (i) {
            if (i < currentPosition) {
                offset += $(this).width();
            }
        });

        if (offset == trackWidth) {
            offset = 0;
        }

        $('#track').css('transform', `translateX(-${offset}px)`);
    }

    $('#next').on('click', function () {
        currentPosition = currentPosition + 1;
        
        if (currentPosition == $('img').length) {
            currentPosition = 0;
        }
        Move();
    })

})