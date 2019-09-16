const ball = document.getElementById('ball');
const display = document.getElementById('display');

const answers = [
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

ball.onclick = () => {
    ball.classList.add('shake');
};

ball.addEventListener('animationend', () => {
    ball.classList.remove('shake');

    display.innerText = answers[Math.floor(Math.random() * answers.length)];
});