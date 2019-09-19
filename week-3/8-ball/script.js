var ball = document.getElementById('ball');
var display = document.getElementById('display');

var answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes - definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Don\'t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
]

ball.onclick = function() {
    ball.classList.add('shake');
};

ball.addEventListener('animationend', function() {
    ball.classList.remove('shake');

    display.innerText = answers[Math.floor(Math.random() * answers.length)];
});