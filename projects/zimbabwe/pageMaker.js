var c = document.getElementById('content');

//Timed Align
var timer = setInterval(reload, 500);

//Aligns All
function reload(){
    f.style.color = document.body.style.backgroundColor;
    c.style.backgroundColor = document.getElementById("backgroundColor").value;
    c.style.color = document.getElementById("textColor").value;
}

window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};

//Unloads Interval
function unload(){
    clearInterval(timer);
}

//^^^
window.onunload = unload;