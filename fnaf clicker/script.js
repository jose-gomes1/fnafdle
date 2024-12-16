// Utility function to format large numbers
function formatNumber(num) {
    if (num === 0) return "0"; // Handle zero explicitly
    if (isNaN(num) || num === undefined || num === null) return "0"; // Fallback for invalid numbers

    const suffixes = ['', 'K', 'M', 'B', 'T', 'Qua', 'Qui', 'Sex', 'Sep', 'Oct', 'Non'];
    let tier = Math.floor(Math.log10(num) / 3);

    if (tier <= 0) return num.toString(); // Numbers below 1K don't need formatting
    const suffix = suffixes[tier] || ''; // Handle cases where tier exceeds suffixes
    const scale = Math.pow(10, tier * 3);
    const scaled = num / scale;

    return `${scaled.toFixed(1)}${suffix}`;
}

const animatronics = [
    { name: "Bonnie the Bunny", cost: 30, pps: 1, img: "images/bonnie.png", owned: 0 },
    { name: "Chica the Chicken", cost: 200, pps: 5, img: "images/chica.png", owned: 0 },
    { name: "Foxy the Pirate", cost: 500, pps: 15, img: "images/foxy.png", owned: 0 },
    { name: "Freddy Fazbear", cost: 1000, pps: 50, img: "images/freddy.png", owned: 0 },
    { name: "Golden Freddy", cost: 5000, pps: 100, img: "images/golden.png", owned: 0 },
    { name: "The Mimic Endo", cost: 7500, pps: 250, img: "images/mimic.png", owned: 0 },
    { name: "Springtrap .", cost: 20000, pps: 500, img: "images/springtrap.png", owned: 0 }
];

let pizzaCount = 0;
let pizzasPerSecond = 0;

const pizzaElement = document.getElementById("pizza");
const pizzaCountElement = document.getElementById("pizza-count");
const ppsElement = document.getElementById("pps");
const animatronicsContainer = document.getElementById("animatronics");
const animatronicDisplay = document.getElementById("animatronic-display");

pizzaElement.addEventListener("click", (event) => {
    pizzaElement.style.transform = "scale(1.2)"; // Grow pizza on click
    pizzaCount++;
    updateDisplay();

    // Trigger floating pizza animation at mouse pointer position
    createFloatingPizza(event.clientX, event.clientY);

    // Reset size after the click animation
    setTimeout(() => (pizzaElement.style.transform = "scale(1)"), 100);
});

function createFloatingPizza(x, y) {
    const floatingPizza = document.createElement("div");
    floatingPizza.textContent = "+1"; // Text to display
    floatingPizza.className = "floating-pizza";
    floatingPizza.style.left = `${x}px`; // Horizontal position
    floatingPizza.style.top = `${y}px`;  // Vertical position
    document.body.appendChild(floatingPizza);

    // Animate the pizza upwards and fade out
    setTimeout(() => {
        floatingPizza.style.transform = "translateY(-50px)";
        floatingPizza.style.opacity = "0";
    }, 10);

    // Remove the element after the animation
    setTimeout(() => {
        floatingPizza.remove();
    }, 1000);
}

function updateDisplay() {
    pizzaCountElement.textContent = formatNumber(Math.floor(pizzaCount));
    ppsElement.textContent = formatNumber(Math.max(pizzasPerSecond, 0)); // Ensure non-negative values
}

function createAnimatronicButtons() {
    animatronics.forEach((animatronic, index) => {
        const animatronicDiv = document.createElement("div");
        animatronicDiv.className = "animatronic";

        const animatronicName = document.createElement("h3");
        animatronicName.textContent = animatronic.name;

        const animatronicCost = document.createElement("p");
        animatronicCost.textContent = `Cost: ${formatNumber(animatronic.cost)} pizzas`;
        
        const animatronicPPS = document.createElement("p");
        animatronicPPS.textContent = `Slices per Second: ${animatronic.pps}`;

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.addEventListener("click", (event) => buyAnimatronic(index, event));
        
        animatronicDiv.appendChild(animatronicName);
        animatronicDiv.appendChild(animatronicCost);
        animatronicDiv.appendChild(animatronicPPS);
        animatronicDiv.appendChild(buyButton);

        animatronicsContainer.appendChild(animatronicDiv);
    });
}

function buyAnimatronic(index, event) {
    const animatronic = animatronics[index];

    if (pizzaCount >= animatronic.cost) {
        pizzaCount -= animatronic.cost;
        pizzasPerSecond += animatronic.pps;
        animatronic.owned++;
        animatronic.cost = Math.ceil(animatronic.cost * 1.2); // Increase cost dynamically

        if (animatronic.owned === 1) {
            displayAnimatronic(animatronic.img);
        }

        triggerConfetti(event); // Trigger confetti on button click
        updateDisplay();
        updateAnimatronicButtons();
    }
}

function displayAnimatronic(imgUrl) {
    const animatronicImg = document.createElement("img");
    animatronicImg.src = imgUrl;
    animatronicDisplay.appendChild(animatronicImg);
}

function updateAnimatronicButtons() {
    const animatronicDivs = document.querySelectorAll(".animatronic");
    animatronics.forEach((animatronic, index) => {
        const costElement = animatronicDivs[index].querySelector("p:nth-of-type(1)");
        costElement.textContent = `Cost: ${formatNumber(animatronic.cost)} pizzas`;
    });
}

function generatePizzas() {
    pizzaCount += pizzasPerSecond / 10;
    updateDisplay();
}

function triggerConfetti(event) {
    const rect = event.target.getBoundingClientRect();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight
        }
    });
}

createAnimatronicButtons();
setInterval(generatePizzas, 100); // Generate pizzas every 100ms
