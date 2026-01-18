const currentAvailability = "NOW ACCEPTING 2 NEW CLIENTS FOR FEBRUARY";

document.addEventListener("DOMContentLoaded", () => {
    
    updateStatusLabel();
    initMobileMenu();
    initBackgroundCanvas();
    initReviewScrollers();
    initQRModal();
});

function updateStatusLabel() {
    const statusLabel = document.getElementById("availability-text");
    if (statusLabel) {
        statusLabel.innerText = "SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | " + currentAvailability;
    }
}

function initMobileMenu() {
    const trigger = document.getElementById("menu-trigger");
    const nav = document.getElementById("mobile-nav");
    
    if (trigger && nav) {
        trigger.addEventListener("click", () => {
            nav.classList.toggle("active");
            trigger.classList.toggle("open");
        });
    }
}

function initBackgroundCanvas() {
    const canvas = document.getElementById("digital-vastu-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    let shapes = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    class GeometricShape {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 50 + 30;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.type = Math.floor(Math.random() * 3); // 0: Hexagon, 1: Triangle, 2: Compass
            this.angle = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.angle += 0.001;

            if (this.x > width + this.size) this.x = -this.size;
            if (this.x < -this.size) this.x = width + this.size;
            if (this.y > height + this.size) this.y = -this.size;
            if (this.y < -this.size) this.y = height + this.size;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.strokeStyle = "rgba(240, 180, 41, 0.15)";
            ctx.lineWidth = 1;
            ctx.beginPath();

            if (this.type === 0) { // Hexagon
                for (let i = 0; i < 6; i++) {
                    ctx.lineTo(this.size * Math.cos(i * Math.PI / 3), this.size * Math.sin(i * Math.PI / 3));
                }
            } else if (this.type === 1) { // Triangle
                for (let i = 0; i < 3; i++) {
                    ctx.lineTo(this.size * Math.cos(i * 2 * Math.PI / 3), this.size * Math.sin(i * 2 * Math.PI / 3));
                }
            } else { // Compass Marker
                ctx.moveTo(-this.size, 0);
                ctx.lineTo(this.size, 0);
                ctx.moveTo(0, -this.size);
                ctx.lineTo(0, this.size);
            }

            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }

    for (let i = 0; i < 25; i++) {
        shapes.push(new GeometricShape());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        shapes.forEach(s => {
            s.update();
            s.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initReviewScrollers() {
    const tracks = document.querySelectorAll(".scroller-track");
    tracks.forEach(track => {
        if (track.children.length > 0) {
            const content = track.innerHTML;
            track.innerHTML = content + content; // Duplicate for loop
        }
    });
}

function initQRModal() {
    const modal = document.getElementById("qr-modal");
    const openBtn = document.getElementById("open-qr-btn");
    const closeBtn = document.getElementById("close-qr-btn");

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}
