var person = {
    name: 'Eskil',
    age: 23,
    isCool: false,
    cat: null,
};

console.log(person.name);
var key = 'name';
console.log(person[key]);

console.log(person.dog);

person.name = 'Sven';

person.dog = 'Chili';

person.meerkat = 'Kat';
var animal = 'meerkat';
person[animal] = 'Kat';
console.log(person);

// ----
console.log('----');

var button = {
    text: 'Click me',
    disabled: false,
    style: {
        backgroundColor: 'salmon',
    },
};

console.log(button.style.backgroundColor);
button.style.backgroundColor = 'red';

// function buttonClick() {
//     alert('You clicked me');
// }

// button.onclick = buttonClick;
// button.onclick();

button.onclick = function() {
    alert('You clicked me');
}
// button.onclick();

var button = {
    text: 'Click me',
    onclick: function() {
        alert('You clicked me')
    }
};
// button.onclick();

var realButton = document.getElementById('button');
realButton.style.backgroundColor = 'salmon';
realButton.onclick = function() {
    alert('Click');
};
realButton.innerHTML = 'Something else';

// ----

var text = 'hello';
console.log(text.length);
