// --- Dynamic Dateline and Copyright Year ---
document.addEventListener('DOMContentLoaded', function() {
    // Dateline
    const datelineElement = document.getElementById('dateline');
    if (datelineElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        datelineElement.textContent = `${formattedDate} | Damak, Nepal`;
    }

    // Copyright Year
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
