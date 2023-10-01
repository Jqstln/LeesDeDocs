const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark-mode') enableDarkMode();
darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    darkModeToggle.style.transform = 'rotate(180deg)';
    darkModeToggle.textContent = '🌙';
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', '');
    darkModeToggle.style.transform = 'rotate(0deg)';
    darkModeToggle.textContent = '☀️';
}
