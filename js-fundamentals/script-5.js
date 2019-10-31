var bannerButton = document.getElementById('bannerButton');
bannerButton.onclick = function(event) {
    event.stopPropagation();
    event.preventDefault();
    alert('Click');

    setTimeout(function() {
        window.location = bannerButton.href;
    }, 1000);
};

var banner = document.getElementById('banner');
banner.onclick = function() {
    alert('Click on banner');
};