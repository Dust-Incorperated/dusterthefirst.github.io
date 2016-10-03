var h = document.getElementById('header').offsetHeight;
document.getElementById('headerSpacer').style.height = h;

var timer = setInterval(move, 10000);

function move(){
    var h = document.getElementById('header').offsetHeight;
    document.getElementById('headerSpacer').style.height = h;
}

function unload(){
    clearInterval(timer);
}

window.onunload = unload;