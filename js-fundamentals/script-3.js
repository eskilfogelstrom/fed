// Collection of data/variables

var person = {
    name: 'Eskil',
    age: 23,
    isCool: false,
    cat: null,
};

// Each individual data point is called a property
// Access through dot-notation

console.log(person.name);

// Writing this is like writing the value itself (like a variable)
console.log(person.age + 1);
console.log(person['name']);

// Accessing a property that doesn't exist gives us undefined
console.log(person.dog);

// You can change properties
person.name = 'Patrik';
console.log(person.name);

// ----

// You can have objects within objects
var button = {
    text: 'Click me',
    disabled: false,
    style: {
        backgroundColor: 'salmon',
    },
};

console.log(button.style.backgroundColor);
button.style.backgroundColor = 'red';

// You can also have functions within an object. These are called methods
function buttonClick() {
    alert('You clicked me!');
}

button.onclick = buttonClick;
button.onclick();

// You can also add functions straight away without naming them. These are called anonymous functions
var button = {
    text: 'Click me',
    disabled: false,
    style: {
        backgroundColor: 'salmon',
    },
    onclick: function() {
        alert('You clicked me!');
    }
};
button.onclick();

// ----

// Everything is (special) objects

// String
var name = 'Hello world';
console.log(txt.length);

// Numbers
var age = 23;
console.log(age.toString());

// Arrays
var hobbies = ['music', 'space'];
console.log(hobbies.length);

// Elements
var button = document.getElementById('button');
console.log(button.onclick);