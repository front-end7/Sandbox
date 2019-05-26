// scripts goes here

function load() {
    var text = localStorage.getItem('message');
    document.getElementById('message').innerText = text;
    console.log('data loaded')
}

function save() {
    var text = document.getElementById('message').value;
    document.getElementById('message').value = '';
    localStorage.setItem('message', text);
    console.log('data saved: ', text)
}

