const currentAvailability = "NOW ACCEPTING 2 NEW CLIENTS FOR FEBRUARY";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Availability
    const ticker = document.querySelector(".system-status .mono");
    if (ticker) ticker.innerText = `SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | ${currentAvailability}`;

    // 2. Mobile Menu
    const menuTrigger = document.getElementById("menu-trigger");
    const mobileNav = document.getElementById("mobile-nav");
    if (menuTrigger) {
        menuTrigger.addEventListener("click", () => {
            mobileNav.classList.toggle("active");
        });
    }

    // 3. Background Canvas
    initCanvas();

    // 4. Scroller Loop
    const tracks = document.querySelectorAll(".scroller-track");
    tracks.forEach(track => {
        track.innerHTML += track.innerHTML; // Double the content for infinite effect
    });

    // 5. Payment Modal Fix
    const openBtn = document.getElementById("open-qr-btn");
    const modal = document.getElementById("qr-modal");
    const closeBtn = document.getElementById("close-qr-btn");

    if (openBtn && modal) {
        openBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };
});

function initCanvas() {
    const canvas = document.getElementById("digital-vastu-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const particles = Array.from({ length: 15 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 80 + 40,
        type: Math.floor(Math.random() * 3)
    }));

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "rgba(240, 180, 41, 0.1)";
        ctx.lineWidth = 1;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            if (p.type === 0) { // Triangle
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.size, p.y);
                ctx.lineTo(p.x + p.size/2, p.y - p.size);
            } else if (p.type === 1) { // Hexagon
                for(let i=0; i<6; i++) {
                    ctx.lineTo(p.x + p.size * Math.cos(i * Math.PI / 3), p.y + p.size * Math.sin(i * Math.PI / 3));
                }
            } else { // Compass
                ctx.moveTo(p.x - p.size, p.y);
                ctx.lineTo(p.x + p.size, p.y);
                ctx.moveTo(p.x, p.y - p.size);
                ctx.lineTo(p.x, p.y + p.size);
            }
            ctx.closePath();
            ctx.stroke();
        });
        requestAnimationFrame(draw);
    }
    draw();
}
