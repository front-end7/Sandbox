// подписка на событие обьекта window в момент когда все теги были построены в браузере
window.addEventListener('DOMContentLoaded', function () {
    // используем плагин для определения загрузки картинок в блоке
    // https://imagesloaded.desandro.com/
    // document.querySelector('#home') это получение елемента с id="home"
    imagesLoaded( document.querySelector('#home'), { background: true }, function( instance ) {
        // .classList.add('zoomIn'); добавление нового класа 'zoomIn' для елемента с id="home"
        document.querySelector('#home_container').classList.add('zoomIn');
        document.querySelector('#home_container').classList.add('animated');
    });
    imagesLoaded( document.querySelector('#images'), function () {
        // window.pageYOffset определение смещения видимого контента на странице
        if (window.pageYOffset >= 725) {
            document.querySelector('#images').classList.add('slideInRight');
            document.querySelector('#images').classList.add('animated');
        }
    })
})
// window.addEventListener('scroll', function () подписались на союбытие прокрутки страницы
window.addEventListener('scroll', function () {
    // window.scrollY значение прокрутки страницы
    if (window.scrollY >= 725) {
        document.querySelector('#images').classList.add('slideInRight');
        document.querySelector('#images').classList.add('animated');
    }
})
// обьработчик события перед выходом со страницы
window.onbeforeunload = function() {
    return "Данные не сохранены. Точно перейти?";
};

var html = '<ol>';

var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
   ];

for (const element of playList) {
    html+= `<li>${element.author} - ${element.song}</li>`
}

html+= '</ol>';

document.write(html);