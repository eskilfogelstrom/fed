// Finding elements by ID
var header = document.getElementById('header');

// Accessing children
var homeLink = header.children[0];
console.log(homeLink);

// Accessing parent
console.log(homeLink.parentElement);

// Accessing next element
var aboutLink = homeLink.nextElementSibling
console.log(aboutLink);

// Accessing previous element
console.log(aboutLink.previousElementSibling);

// ----

// Selecting by tag name gives us a list elements
var anchors = document.getElementsByTagName('a');
console.log(anchors);

// Selecting by class name
var links = document.getElementsByClassName('link');
console.log(links);

// Selecting within an element
console.log(header.getElementsByTagName('a'));

// Use IDs when you want one specific element and the others when you want many

// Modifying many elements with loops
for (var i = 0; i < anchors.length; i++) {
    // anchors[i].innerHTML = 'You got hacked';
}

// ----

var bannerButton = document.getElementById('bannerButton');
bannerButton.onclick = function() {
    alert('You clicked me!');
};

var banner = document.getElementById('banner');
banner.onclick = function() {
    alert('And me!');
};