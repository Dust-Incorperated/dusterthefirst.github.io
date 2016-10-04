
//Timed Align
var timer = setInterval(reload, 500);

//Aligns All
function reload(){
    document.body.style.backgroundColor = document.getElementById("backgroundColor").value;
    document.body.style.color = document.getElementById("textColor").value;
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