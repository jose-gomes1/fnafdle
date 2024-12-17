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

const GAME_STATE_KEY = "fnafPizzaClickerGame"; // Consistent key for saving state
const animatronics = [
    { name: "Bonnie the Bunny", cost: 30, initialCost: 30, pps: 1, img: "images/bonnie.png", owned: 0 },
    { name: "Chica the Chicken", cost: 200, initialCost: 200, pps: 5, img: "images/chica.png", owned: 0 },
    { name: "Foxy the Pirate Fox", cost: 500, initialCost: 500, pps: 15, img: "images/foxy.png", owned: 0 },
    { name: "Freddy Fazbear", cost: 1000, initialCost: 1000, pps: 50, img: "images/freddy.png", owned: 0 },
    { name: "Golden Freddy", cost: 5000, initialCost: 5000, pps: 100, img: "images/golden.png", owned: 0 },
    { name: "The Mimic", cost: 7500, initialCost: 7500, pps: 250, img: "images/mimic.png", owned: 0 },
    { name: "Mangle", cost: 10000, initialCost: 10000, pps: 400, img: "images/mangle.png", owned: 0 },
    { name: "Withered Bonnie", cost: 15000, initialCost: 15000, pps: 500, img: "images/w_bonnie.png", owned: 0 },
    { name: "The Puppet", cost: 20000, initialCost: 20000, pps: 750, img: "images/puppet.png", owned: 0 },
    { name: "Springtrap", cost: 25000, initialCost: 25000, pps: 1000, img: "images/springtrap.png", owned: 0 }
    ];

async function fetchUserIP() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=6e52f3303eb525'); // Replace with your API token
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return 'unknown'; // Return a fallback IP in case of error
    }
}

let pizzaCount = 0;
let pizzasPerSecond = 0;
let clickPower = 1;
let slicerCost = 1000;  // Initial cost to evolve the slicer

const evolveButton = document.getElementById("evolve-button"); // Add a button with id "evolve-button"
const slicerCostElement = document.getElementById("slicer-cost"); // Element to display current slicer cost
const clickPowerElement = document.getElementById("click-power"); // Element to display current click power

// Load game state from localStorage when the page loads
function loadGameState() {
    const savedState = localStorage.getItem(GAME_STATE_KEY);

    if (savedState) {
        const gameState = JSON.parse(savedState);
        pizzaCount = gameState.pizzaCount || 0;
        pizzasPerSecond = gameState.pizzasPerSecond || 0;
        slicerCost = gameState.slicerCost || slicerCost; // Restore slicer cost
        clickPower = gameState.clickPower || clickPower; // Restore click power

        // Clear the animatronic display before re-adding images
        animatronicDisplay.innerHTML = "";

        // Restore animatronic costs and ownership
        if (gameState.animatronics) {
            gameState.animatronics.forEach((savedAnimatronic, index) => {
                if (animatronics[index]) {
                    animatronics[index].cost = savedAnimatronic.cost;
                    animatronics[index].owned = savedAnimatronic.owned;

                    // Display the image only if owned > 0
                    if (animatronics[index].owned > 0) {
                        displayAnimatronic(animatronics[index].img);
                    }
                }
            });
        }
    }

    updateDisplay();
    updateAnimatronicButtons();
    checkSlicerVisibility(); // Check and hide slicer button if needed
    console.log("Game loaded successfully");
}

// Save game state to localStorage when the user exits or the state changes
function saveGameState() {
    const gameState = {
        pizzaCount,
        pizzasPerSecond,
        slicerCost,        // Save slicer cost
        clickPower,        // Save click power
        animatronics: animatronics.map(animatronic => ({
            cost: animatronic.cost,
            owned: animatronic.owned
        }))
    };

    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    console.log("Game saved successfully");
}

function evolveSlicer() {
    if (pizzaCount >= slicerCost) {  // Check if the player has enough pizzas
        pizzaCount -= slicerCost;  // Deduct the cost of evolving the slicer
        if (clickPower < 32) {  // Maximum click power is 32
            clickPower *= 2;  // Double the click power
        }

        // Increase the slicer cost based on the formula
        slicerCost = slicerCost * 2;

        updateDisplay();  // Update the display
        // Hide evolve button when max click power is reached
        if (clickPower >= 32) {
            evolveButton.style.display = "none"; // Hide the button
        }

        updateDisplay();  // Update the display
    } else {
        alert("You don't have enough pizzas to evolve the slicer!");  // Notify the player if not enough pizzas
    }
}

function checkSlicerVisibility() {
    if (clickPower >= 32) {
        evolveButton.style.display = "none";
    } else {
        evolveButton.style.display = "";
    }
}

// Call loadGameState when the page loads
window.addEventListener('load', () => {
    loadGameState();
    checkSlicerVisibility(); // Ensure slicer button visibility is handled on page load
});

// Save game state when the page is unloaded (e.g., when the user exits)
window.addEventListener('beforeunload', () => {
    saveGameState();
});

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

const pizzaElement = document.getElementById("pizza");
const pizzaCountElement = document.getElementById("pizza-count");
const ppsElement = document.getElementById("pps");
const animatronicsContainer = document.getElementById("animatronics");
const animatronicDisplay = document.getElementById("animatronic-display");

pizzaElement.addEventListener("click", (event) => {
    pizzaElement.style.transform = "scale(1.2)"; // Grow pizza on click
    pizzaCount += clickPower;  // Increase pizza count by the current click power
    updateDisplay();

    // Trigger floating pizza animation at mouse pointer position
    createFloatingPizza(event.clientX, event.clientY);

    // Reset size after the click animation
    setTimeout(() => (pizzaElement.style.transform = "scale(1)"), 100);
});

evolveButton.addEventListener("click", evolveSlicer);

function createFloatingPizza(x, y) {
    const floatingPizza = document.createElement("div");
    floatingPizza.textContent = `+${clickPower}`; // Text to display
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
    slicerCostElement.textContent = `Slicer Cost: ${formatNumber(slicerCost)} pizzas`; // Display slicer evolution cost
    clickPowerElement.textContent = `Click Power: x${clickPower}`; // Display current click power
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

        // Add event listener to the entire animatronicDiv
        animatronicDiv.addEventListener("click", (event) => buyAnimatronic(index, event));

        // Append elements to animatronicDiv
        animatronicDiv.appendChild(animatronicName);
        animatronicDiv.appendChild(animatronicCost);
        animatronicDiv.appendChild(animatronicPPS);

        // Append the animatronicDiv to the container
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

        triggerConfetti(event); // Trigger confetti on click
        updateDisplay(); // Update pizza count and pps display
        updateAnimatronicButtons(); // Update animatronic cost display
    }
}

function displayAnimatronic(imgUrl) {
    const animatronicImg = document.createElement("img");
    animatronicImg.src = imgUrl;
    animatronicImg.style.height = "80px"; // Default height when added
    animatronicDisplay.appendChild(animatronicImg);
    adjustAnimatronicImageHeight(); // Adjust image height
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

function adjustAnimatronicImageHeight() {
    const animatronicImages = animatronicDisplay.querySelectorAll("img");
    animatronicImages.forEach(img => {
        if (animatronicImages.length > 6) {
            img.style.height = "200px"; // Smaller height for more images
        } else {
            img.style.height = "250px"; // Default height
        }
    });
}

updateDisplay();
createAnimatronicButtons();
setInterval(generatePizzas, 100); // Generate pizzas every 100ms
// Call loadGameState when the page loads
window.addEventListener('load', loadGameState);

// Save game state when the page is unloaded (e.g., when the user exits)
window.addEventListener('beforeunload', saveGameState);

function resetGameState() {
    localStorage.removeItem(GAME_STATE_KEY); // Remove saved state from localStorage
    pizzaCount = 0;
    pizzasPerSecond = 0;
    slicerCost = 1000;     // Reset slicer cost to its initial value
    clickPower = 1;        // Reset click power to its initial value

    // Reset animatronics to their initial state
    animatronics.forEach(animatronic => {
        animatronic.cost = animatronic.initialCost; // Reset to the initial cost
        animatronic.owned = 0;
    });

    // Clear animatronic images
    animatronicDisplay.innerHTML = "";
    adjustAnimatronicImageHeight(); // Adjust image height after reset

    updateDisplay();
    updateAnimatronicButtons();
    checkSlicerVisibility(); // Check and restore slicer button visibility

    console.log("Game state has been reset!");
}

// Trigger reset with a secret key combination: Ctrl + Shift + R
window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "R") {
        resetGameState();
        alert("Game has been reset!");
    }
});
