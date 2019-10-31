var header = document.getElementById('header');

// Accessing children
var homeLink = header.children[0];
console.log(homeLink);

// Accessing parent
console.log(homeLink.parentElement);

// Accessing next/previous siblings
var aboutLink = homeLink.nextElementSibling;
console.log(aboutLink);

console.log(aboutLink.previousElementSibling);

// ----

var anchors = document.getElementsByTagName('a');
console.log(anchors);

var links = document.getElementsByClassName('link');
console.log(links);

console.log(document.querySelectorAll('a.link'));

var header = document.getElementById('header');
var headerLinks = header.getElementsByTagName('a');
console.log(headerLinks);


for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].style.color = 'salmon';
}

header.id = 'something';