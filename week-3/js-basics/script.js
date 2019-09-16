// Declaring a variable called name with the value of 'Eskil'
// Text values are called strings and has to be placed within quotes
var name = 'Eskil';

// Calling functions
alert(name);

// Declaring a variable counter with the value of 0.
// Numbers are without quotes. '0' vs 0 is not the same
var counter = 0;
// You can modify the value of existing variables by reassigning them
counter = counter + 1;

// Finding elements through their ID and storing it in a variable
var counterElement = document.getElementById('counter');
// Changing an elements contents/HTML
counterElement.innerHTML = counter;

// Declaring a function called add
function add() {
    counter = counter + 1;
    counterElement.innerHTML = counter;
    // Change the styling of the CSS property left
    counterElement.style.left = (counter * 10) + 'px';

    if (counter * 10 > window.innerWidth) {
        counter = 0;
        counterElement.style.left = (counter * 10) + 'px';
    }
}

// Setting up an event listener for listening on clicks for the button
// There are many types of events
document.getElementById('addButton').onclick = function() {
    add();
}

// counterElement.style.backgroundColor = 'salmon';