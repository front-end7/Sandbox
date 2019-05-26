// scripts goes here
var a = document.createElement('a');
a.setAttribute('href', 'javascript:void(0)');
a.innerText = 'link';

document.getElementById('app').appendChild(a);

var b = '<a href="javascript:void(0)">link2</a>';

document.getElementById('app2').innerHTML = b;

function makeElement(_tagName, _innerText) {
    var element = `<${_tagName}>${_innerText}</${_tagName}>`;

    // var element = '<' + _tagName + '>' + _innerText + '</' + _tagName + '>';

    return element;
}

document.getElementById('app2').innerHTML += makeElement('button', 'newButton');

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

var buffer = '';

buffer += '<ol>'

for (let i = 0; i < playList.length; i++) {
    buffer += `<li>${playList[i].author} - ${playList[i].song}</li>`
}

buffer += '</ol>';

document.write(buffer);

var counter = 1;
var cols = 5, rows = 5;

var buf = '';

buf += '<table>'

for (let i = 0; i < rows; i++) {
    buf += '<tr>';
    for (let j = 0; j < cols; j++) {
        var style = 'style="background-color: black; color: white"';
        if ( counter % 2 ) {
            buf += `<td>${counter}</td>`;
        }
        else {
            buf += `<td ${style}>${counter}</td>`;
        }
        counter++;
    }
    buf += '</tr>';
}

buf += '</table>';

document.write(buf);