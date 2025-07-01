// window.addEventListener('mousemove', (e) => {
//     document.body.style.setProperty('--mx', e.clientX - (window.innerWidth / 2));
//     document.body.style.setProperty('--my', e.clientY - (window.innerHeight / 2));
// });

function updatePosition(x, y) {
    document.body.style.setProperty('--mx', x - (window.innerWidth / 2));
    document.body.style.setProperty('--my', y - (window.innerHeight / 2));
}

// handle mouse
window.addEventListener('mousemove', (e) => {
    updatePosition(e.clientX, e.clientY);
});

// handle touch
window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    updatePosition(touch.clientX, touch.clientY);
});
