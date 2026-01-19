// SYSTEM CAPACITY LOGIC
const currentAvailability = "NOW ACCEPTING 4 RESEARCH ENGAGEMENTS PER MONTH";
const openPositions = "2 SLOTS REMAINING FOR FEBRUARY";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Update Ticker Text
    const tickerItems = document.querySelectorAll(".ticker-text");
    tickerItems.forEach(item => {
        item.innerText = `SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | ${currentAvailability} | ${openPositions}`;
    });

    // 2. Clone Ticker for Infinite Loop
    const ticker = document.querySelector(".ticker");
    if (ticker) {
        ticker.innerHTML += ticker.innerHTML;
    }

    // 3. Simple Mobile Menu (Placeholder for future Burger logic)
    console.log("Khem Raj Pradhan OS: Systems Online");
});
