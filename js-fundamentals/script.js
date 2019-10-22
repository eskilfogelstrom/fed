// Variables
var name = 'Eskil';
var age = 23;
var isBirthday = false;
var cat = null;
var favoriteColor;

var fullName = 'Eskil Fogelström';
// var 1address = 'Finntorpsvägen 11';

// Variable mutation
// alert(cat);
cat = 'Smokey';
console.log(cat);
// alert(cat);

// Type coercion
console.log(name + ' is ' + age);
console.log(name + isBirthday);
console.log(name + null);

console.log(true + 23);

console.log('-------');

// Operators
console.log(age + 1);
console.log(age - 1);
console.log(age * 10);
console.log(age / 10);
console.log(23 % 2);

console.log((10 + 5) * 2);

console.log('-------');

var canDrink = age >= 18;
console.log(canDrink);
var isEskil = name === 'Eskil';
console.log(1 === '1');

var isNotEskil = name !== 'Eskil';

console.log('----');
// if statements

if (age >= 18) {
    console.log('get drunk!!!');
} else if (age >= 17) {
    console.log('Any day now...');
} else {
    console.log('Sorry kiddo');
}

// 0
// ''
// false
// null
// undefined
// NaN

if (cat) {

}

// if (cat !== 0 && cat !== '' && cat !== null...)

console.log('----');

// Functions
function getBirthYear(age, currentYear) {
    return currentYear - age;
}

var birthYear = getBirthYear(28, 2019);
console.log(birthYear);