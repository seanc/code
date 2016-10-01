var it = document.querySelector('iframe');
it.height = window.innerHeight;
var i = -1;
var text = 'Never gonna give you up, never gonna let you down. Never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye. Never gonna tell a lie and hurt you.' +
    ' (Ooh give you up) (Ooh give you up ) (Ooh) Never gonna give, never gonna give (give you up) (Ooh) Never gonna give, never gonna give (give you up)';
var items = text.split(' ');
var length = text.length;
setInterval(function () {
    i++;
    if (i >= length) {
        i = 0;
    }
    document.title = text.substr(i);
    //console.info(document.title); // :)
}, 75);
