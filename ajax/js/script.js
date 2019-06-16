$(document).ready(function () {

    var buf = '';
    
    $.ajax({
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    }).done(function (result) {
        for (const item of result) {
            if (item.r030 == '840' || item.r030 == '978') {
                buf += `${item.cc}: ${item.rate}\n`;
            }
        }
    }).done(function () {
        
        $('#app').text(buf);
    })

})