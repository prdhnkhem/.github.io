document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Activation
    const trigger = document.getElementById("burger-trigger");
    const menu = document.getElementById("mobile-menu");
    if (trigger && menu) {
        trigger.addEventListener("click", () => {
            menu.classList.toggle("active");
            document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "auto";
        });
    }

    // 2. Continuous Ticker Loop
    const tickerContainer = document.getElementById("master-ticker");
    if (tickerContainer) {
        const text = "SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | NOW ACCEPTING 4 RESEARCH ENGAGEMENTS PER MONTH | 10 AM — 5 PM NST";
        tickerContainer.innerHTML = `<span class="ticker-item mono gold-text">${text}</span>`.repeat(4);
        
        let pos = 0;
        function animateTicker() {
            pos -= 0.6;
            if (pos <= -(tickerContainer.firstElementChild.offsetWidth)) {
                pos = 0;
            }
            tickerContainer.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(animateTicker);
        }
        animateTicker();
    }

    // 3. Review Scroller Loop
    const reviewTrack = document.querySelector(".scroller-track");
    if (reviewTrack) {
        reviewTrack.innerHTML += reviewTrack.innerHTML;
        let rPos = 0;
        function animateReviews() {
            rPos -= 0.4;
            if (rPos <= -(reviewTrack.scrollWidth / 2)) {
                rPos = 0;
            }
            reviewTrack.style.transform = `translateX(${rPos}px)`;
            requestAnimationFrame(animateReviews);
        }
        animateReviews();
    }

    // 4. Background Canvas Animation
    initBackgroundCanvas();
});

function initBackgroundCanvas() {
    const canvas = document.getElementById("digital-vastu-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;
    const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const particles = Array.from({ length: 15 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 60 + 30,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        t: Math.floor(Math.random() * 3)
    }));

    function loop() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = "rgba(240, 180, 41, 0.1)";
        ctx.lineWidth = 1;
        particles.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            ctx.beginPath();
            if (p.t === 0) { // Hexagon
                for(let i=0; i<6; i++) ctx.lineTo(p.x + p.s * Math.cos(i * Math.PI/3), p.y + p.s * Math.sin(i * Math.PI/3));
            } else if (p.t === 1) { // Triangle
                ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.s, p.y); ctx.lineTo(p.x + p.s/2, p.y - p.s);
            } else { // Compass
                ctx.moveTo(p.x - p.s, p.y); ctx.lineTo(p.x + p.s, p.y); ctx.moveTo(p.x, p.y - p.s); ctx.lineTo(p.x, p.y + p.s);
            }
            ctx.closePath(); ctx.stroke();
        });
        requestAnimationFrame(loop);
    }
    loop();
}
