const box = document.getElementById('box');

box.onclick = () => {
    box.classList.add('animate');

    box.addEventListener('animationend', () => {
        box.classList.remove('animate');
    });
    // setTimeout(() => {
    //     box.classList.remove('animate');
    // }, 5000);
};
// setTimeout(function() {
//     box.style.transform = 'translateX(200px)';
// }, 500);

// setTimeout(function() {
//     box.style.transform = 'translateX(400px)';
// }, 1000);