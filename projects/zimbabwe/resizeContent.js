var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var c = document.getElementById('content');
var h = document.getElementById('header');
var f = document.getElementById('footer');

c.style.height = height - (h.offsetHeight + f.offsetHeight);