// scripts goes here
var log = document.getElementById('log');

var textArray = [];

function load() {

    var text = localStorage.getItem('message');
    
    if (text != null) {

        textArray = JSON.parse(text);
        
        for (let i = 0; i < textArray.length; i++) {
            
            makePanel(textArray[i]);
            
        }

        log.innerText += 'data loaded\n';
    }
    else {
        log.innerText += 'data empty\n';
    }

}

function submit() {
    
    var text = document.getElementById('message').value;

    textArray.push(text);

    makePanel(text);

    document.getElementById('message').value = '';

}

function save() {

    var buf = JSON.stringify(textArray);

    localStorage.setItem('message', buf);

    log.innerText += 'data seved:'+ buf + '\n';
}

function clearData() {
    localStorage.removeItem('message');
    log.innerText += 'data cleared\n';
}

var panels = document.getElementById('panels');

function makePanel(_text) {
    
    // var date = new Date;

    panels.innerHTML += `
        <div class="panel">
            ${_text}
        </div>
    `;

}