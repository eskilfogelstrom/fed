var answers = [
    'Busy, ask later',
    'Yes definitely maybe'
    'No way',
];
var ball = document.getElementById('ball')

ball.onclick = function() {
    var randomAnswer = Math.floor(Math.random * answers.length);
    document.getElementById('display').innerHTML = answers[randomAnswer];

    ball.classList.add('shake');
    setTimeout(function() {
        ball.classList.add('shake');
    }, 1000);
};