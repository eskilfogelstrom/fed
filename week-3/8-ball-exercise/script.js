var answers = [
    'Busy, ask later',
    'Yes definitely maybe',
    'No way',
];

document.getElementById('ball').onclick = function() {
    var randomAnswer = Math.floor(Math.random() * answers.length);
    document.getElementById('display').innerHTML = answers[randomAnswer];

    document.getElementById('ball').classList.add('shake');
    setTimeout(function() {
        document.getElementById('ball').classList.remove('shake');
    }, 1000);
};