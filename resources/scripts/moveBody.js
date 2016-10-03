//Align Body
//Align Body
var h = document.getElementById('header').offsetHeight;
document.getElementById('headerSpacer').style.height = h;
//Align Menu Button
var m = document.getElementById('menu').offsetHeight;
document.getElementById('menu').style.top = h/2 - m/2;

//Timed Align
var timer = setInterval(move, 4000);

//Aligns All
function move(){
    var h = document.getElementById('header').offsetHeight;
    document.getElementById('headerSpacer').style.height = h;
    
    var m = document.getElementById('menu').offsetHeight;
    document.getElementById('menu').style.top = h/2 - m/2;
}

//Unloads Interval
function unload(){
    clearInterval(timer);
}

//^^^
window.onunload = unload;