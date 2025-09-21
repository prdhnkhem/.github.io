document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle Functionality
    const themeToggleButton = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme on initial load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggleButton.addEventListener('click', () => {
        // Toggle the .dark-mode class on the body
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is currently enabled and save preference
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

});
