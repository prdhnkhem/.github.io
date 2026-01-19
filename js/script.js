const currentAvailability = "NOW ACCEPTING 4 RESEARCH ENGAGEMENTS PER MONTH";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Logic
    const burger = document.getElementById("burger-menu");
    const overlay = document.getElementById("mobile-overlay");
    const body = document.body;

    if (burger) {
        burger.addEventListener("click", () => {
            overlay.classList.toggle("active");
            body.style.overflow = overlay.classList.contains("active") ? "hidden" : "auto";
        });
    }

    // 2. Ticker Sync
    const tickerText = `SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | ${currentAvailability} | 10 AM — 5 PM NST`;
    const ticker = document.querySelector(".ticker");
    if (ticker) {
        ticker.innerHTML = `<span class="ticker-item mono gold-text">${tickerText}</span>`.repeat(4);
    }
});
