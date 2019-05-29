$(document).ready(function () {
    // получаем общую ширину слайдов для трека
    var trackWidth = 0;
    $('img').each(function () {
        trackWidth += $(this).width();
    });
    // присваиваем ширину треку
    $('#track').css('width', `${trackWidth}px`);
    // по умолчанию показываем первый слайд
    var currentPosition = 0;
    // функция перемещения трека до текущего слайда
    function Move() {
        // смещение трека в px
        var offset = 0;
        // считаем сумму ширин каждой картинки то текущей
        $('img').each(function (i) {
            if (i < currentPosition) {
                offset += $(this).width();
            }
        });
        
        if (offset == trackWidth) {
            offset = 0;
        }
        // записываем смещение в css
        $('#track').css('transform', `translateX(-${offset}px)`);
    }
    // обработчик следующего слайда
    $('#next').on('click', function () {
        currentPosition = currentPosition + 1;
        // если новый текущий слайд больше чем количество слайдов идем в начало
        if (currentPosition == $('img').length) {
            currentPosition = 0;
        }
        Move();
    })

})