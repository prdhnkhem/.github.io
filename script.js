START OF JS CODE

// SERVICE AVAILABILITY STATUS
// Change the text inside the quotes below to update your waitlist on the website.
const currentAvailability = "NOW ACCEPTING 2 CLIENTS FOR FEBRUARY";

document.addEventListener('DOMContentLoaded', () => {
    
    // Set Availability Text
    const statusText = document.getElementById('availability-text');
    if(statusText) {
        statusText.innerText = "SYSTEM STATUS: BIAS-FREE OBSERVATION ACTIVE | " + currentAvailability;
    }

    // Generate Background Mesh
    const bg = document.getElementById('bg-canvas');
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    
    // Create random hexagons and triangles
    for (let i = 0; i < 15; i++) {
        let shape = document.createElementNS(svgNS, "path");
        let x = Math.random() * width;
        let y = Math.random() * height;
        let size = 40 + Math.random() * 60;
        
        // Hexagon path
        let d = `M ${x} ${y} l ${size} 0 l ${size/2} ${size} l -${size/2} ${size} l -${size} 0 l -${size/2} -${size} Z`;
        
        shape.setAttribute("d", d);
        shape.setAttribute("fill", "none");
        shape.setAttribute("stroke", "#D4AF37");
        shape.setAttribute("stroke-width", "0.5");
        
        svg.appendChild(shape);
    }
    
    bg.appendChild(svg);
});

// Modal Logic
function openPayment() {
    document.getElementById('payment-modal').style.display = 'block';
}

function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('payment-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Interactive Lens Toggle
function toggleLens(lensType) {
    // You can add logic here to show specific popups for each lens if needed later
    console.log("Exploring " + lensType);
}

END OF JS CODE
