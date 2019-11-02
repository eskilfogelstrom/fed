const circle = document.getElementById('circle');

circle.onclick = () => {
    alert('You clicked the circle');
};

// Canvas

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'salmon';
context.fillRect(0, 0, 100, 100);

context.fillStyle = 'mediumspringgreen';
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI * 2);
context.fill();