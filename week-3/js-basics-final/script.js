var name = 'Eskil';

console.log('Hello ' + name);

var counter = 0;
counter = counter + 1;

console.log(counter);

var counterElement = document.getElementById('counter');
counterElement.innerHTML = counter;

function increase() {
    counter += 1
    counterElement.innerHTML = counter;
    counterElement.style.left = (counter * 10) + 'px';
}

increase();

var button = document.getElementById('add');
button.onclick = function() {
    increase();
}

