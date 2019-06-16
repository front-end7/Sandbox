$(document).ready(function () {

    $.ajax({
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    }).done(function (result) {

        var buf = '<select id="selected">';

        for (const item of result) {
            buf += `<option value="${item.rate}">${item.txt}</option>`
        }
        // var temp = result.sort(function(a,b) {
        //     return a.rate - b.rate;
        // })
        
        buf += '</select>';

        buf += '<input type="text" id="value">';

        buf += '<input type="text" id="result" disabled>';

        $('#app').html(buf);

        $('#selected, #value').on('change keyPress', function () {
            $('#result').val(
                $('#selected').val() * $('#value').val()
            );
        })

    })

})