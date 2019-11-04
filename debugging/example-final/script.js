const button = document.getElementById('myButton');

button.onclick = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    if (randomNumber > 3) {
        alert('You see me rollin');
    } else {
        alert('Try again')
    }
};