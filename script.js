// SERVICE AVAILABILITY STATUS
// Change the text below to update your schedule across all pages.
const currentAvailability = "NOW ACCEPTING 2 NEW CLIENTS FOR FEBRUARY";

document.addEventListener(DOMContentLoaded, () => {
    
    // 1. Update Availability Text
    const statusLabel = document.getElementById(availability-text);
    if (statusLabel) {
        statusLabel.innerText = "SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | " + currentAvailability;
    }

    // 2. Digital Vastu: Background Animation
    initBackgroundAnimation();

    // 3. Transformation Records: Scroller Logic
    initReviewScrollers();

    // 4. Sincerity Gate: Modal Logic
    initModalLogic();

    // 5. Mobile Menu Logic
    const mobileBtn = document.getElementById(mobile-toggle);
    const navLinks = document.querySelector(.nav-links);
    if (mobileBtn) {
        mobileBtn.addEventListener(click, () => {
            navLinks.classList.toggle(active);
            mobileBtn.classList.toggle(open);
        });
    }
});

function initBackgroundAnimation() {
    const canvas = document.getElementById(digital-vastu-canvas);
    if (!canvas) return;
    const ctx = canvas.getContext(2d);
    
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener(resize, resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 40 + 20;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.type = Math.floor(Math.random() * 3); // 0: Hexagon, 1: Triangle, 2: Compass
            this.rotation = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += 0.002;

            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }

        draw() {
            ctx.strokeStyle = rgba(240, 180, 41, 0.3);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            if (this.type === 0) { // Hexagon
                for (let i = 0; i < 6; i++) {
                    ctx.lineTo(this.size * Math.cos(i * Math.PI / 3), this.size * Math.sin(i * Math.PI / 3));
                }
            } else if (this.type === 1) { // Triangle
                for (let i = 0; i < 3; i++) {
                    ctx.lineTo(this.size * Math.cos(i * 2 * Math.PI / 3), this.size * Math.sin(i * 2 * Math.PI / 3));
                }
            } else { // Compass Needle
                ctx.moveTo(-this.size, 0);
                ctx.lineTo(this.size, 0);
                ctx.moveTo(0, -this.size / 2);
                ctx.lineTo(0, this.size / 2);
            }

            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }

    for (let i = 0; i < 20; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initReviewScrollers() {
    // This logic ensures the scrollers loop continuously from right to left
    const tracks = document.querySelectorAll(.scroller-track);
    tracks.forEach(track => {
        const content = track.innerHTML;
        track.innerHTML = content + content; // Duplicate for seamless loop
    });
}

function initModalLogic() {
    const modal = document.getElementById(qr-modal);
    const openBtn = document.getElementById(open-qr-btn);
    const closeBtn = document.getElementById(close-qr-btn);

    if (openBtn && modal) {
        openBtn.onclick = () => modal.style.display = flex;
    }

    if (closeBtn && modal) {
        closeBtn.onclick = () => modal.style.display = none;
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = none;
        }
    };
}
