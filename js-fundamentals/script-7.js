var text = 'some text';
text = 'some other text';

const otherText = 'Can\'t touch this';

let name = 'Eskil';
name = 'Sven';

const person = {
    name: 'Eskil'
};
person.name = 'Sven';
person.dog = 'Chili';
console.log(person);

// arrow functions
const sayHi = (name) => {
    alert('Hello' + name);
}

sayHi('Eskil');

// Template literal
const age = 23;
alert('Eskil is ' + age + ' years old');
alert(`Eskil is ${age} year old`);