function updateCookies(newCookies) {
    cookies = newCookies;

    document.getElementById('counter').innerHTML = Math.floor(cookies);
}

function updateCookiesPerSecond(newCookiesPerSecond) {
    cookiesPerSecond = newCookiesPerSecond;
    document.getElementById('cookiesPerSec').innerHTML = cookiesPerSecond + ' cookies/sec';
}

var cookies = 0;
var cookiesPerSecond = 0;

document.getElementById('cookie').onclick = function() {
    updateCookies(cookies + 1);
};

setInterval(function() {
    updateCookies(cookies + cookiesPerSecond);
}, 1000);

document.getElementById('purchase').onclick = function() {
    if (cookies - 15 < 0) {
        return;
    }

    updateCookies(cookies - 15);
    updateCookiesPerSecond(cookiesPerSecond + 1);
};