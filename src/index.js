// TOGGLE DARK-MODE
let currentMode = localStorage.getItem('color-scheme') || 
(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.body.classList.add(currentMode);
const modeToggleButton = document.getElementById('mode-toggle');

modeToggleButton.addEventListener('click', function() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('color-scheme', 'light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('color-scheme', 'dark');
    }
});
