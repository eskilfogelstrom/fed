// Arrays
var names = [
    'Eskil',
    'Håcan',
];
// var eskil = ['Eskil', 23, 'teacher'];
var index = 1;
console.log(names[index]);
console.log(names.length);

names[1] = 'Chili';
console.log(names);

names.push('Håcan');
names.pop();
names.unshift('Håcan');
names.shift();
console.log(names);

console.log('-----');

// Strings
var text = 'Hello world, what a beautiful day it is?';
console.log(text.length);
console.log(text[0]);
console.log(
    text.slice(0, 5) + ' dear ' + text.slice(6, text.length)
);

var wordArray = text.split(' ');
console.log(wordArray.join('_'));

console.log('------');

// Loops & iteration
var names = ['Eskil', 'Håcan', 'Chili', 'Namie'];

var counter = names.length - 1;
while(counter >= 0) {
    console.log(names[counter]);
    counter--;
}

for (var i = 0; i < names.length; i++) {
    const name = names[i];
}


var text = 'abcdef';
console.log(text.split('').join(''))


var counter = 20;

do {
    console.log(counter);
} while (counter < 10)