const characters = [
    "Freddy Fazbear", "Bonnie", "Chica", "Foxy", "Golden Freddy", "Springtrap",
    "Ballora", "Circus Baby", "Ennard", "Molten Freddy", "Scrap Baby", "Scraptrap",
    "Dark Springtrap", "Lefty", "Rockstar Freddy", "Rockstar Bonnie", "Rockstar Chica",
    "Rockstar Foxy", "Carnie", "Happy Frog", "Mr. Hippo", "Orville Elephant",
    "Nedd Bear", "Pigpatch", "Funtime Freddy", "Funtime Foxy", "Funtime Chica", "Nightmare",
    "Nightmare Fredbear", "Nightmare Freddy", "Nightmare Bonnie", "Nightmare Chica",    
    "Nightmare Foxy", "Nightmare Mangle", "Nightmare Balloon Boy", "Phantom Freddy",
    "Phantom Chica", "Phantom Foxy", "Phantom Balloon Boy", "Phantom Puppet",
    "Phantom Mangle", "Shadow Freddy", "RWQFSFASXC", "Helpy",
    "Dee Dee", "XOR", "Old Man Consequences", "Vengeful Spirit",
    "Toy Freddy", "Toy Chica", "Toy Bonnie", "Mangle", "Balloon Boy", "Puppet",
    "JJ", "Withered Freddy", "Withered Bonnie", "Withered Chica", "Withered Foxy",
    "Withered Golden Freddy", "Bidibab", "Electrobab", "Minireena", "Bon Bon",
    "Bonnet", "Yenndo", "Music Man", "Glamrock Freddy", "Glamrock Chica",
    "Montegomery Gator", "Roxanne Wolf", "DJ Music Man", "Wind-Up Music Man",
    "Glitchtrap", "Dreadbear", "Vanny", "Helpi", "Burntrap", "Tangle", "Sun", "Moon",
    "STAFF Bot", "Map Bot", "Mask Bot", "The Mimic", "Shattered Roxy", "Shattered Monty",
    "Shattered Chica", "Glamrock Bonnie", "MXES", "Ruined Chica", "Ruined Roxy", "Ruined Monty",
    "Ruined DJ Music Man", "Ruined Wind-Up Music Man", "Nightmare Staff Bot", 
    "Jack-O-Chica", "Jack-O-Bonnie", "Nightmarionne", "Plushtrap", "Security Puppet", "Captain Foxy",
    "Jack-O-Moon", "Eclipse", "Ruined Freddy", "Springbonnie", "Fredbear", "Mystic Hippo", "Wet Floor Bot",
    "Freddy Frostbear", "8-Bit Baby", "Endo-01", "Endo-02", "Nightmare Endo", "Glamrock Endo", "Freddles",
    "Grimm Foxy", "Lolbit", "Lemonade Clown", "Fruit Punch Clown", "Jackie", "Head Chef Bot", "Hand Unit",
    "Mr Cupcake", "Nightmare Cupcake", "Jack-O-Lantern", "Hand Unit", "Dark Freddy", "Neon Bonnie", "Neon Chica",
    "Burnt Foxy", "Shadow Mangle", "Dark Foxy", "Party Freddy", "Bucket Bob", "Mr Can-Do", "Number 1 Crate", "Pan Stan",
    "Paper Pals", "Candy Cadet", "El Chip", "Tilt", "Phone Guy", "Phone Dude", "Gregory", "Vanessa", "Michael Afton", 
    "Cassie", "Jeremy Fitzgerald", "Elizabeth Afton", "William Afton", "Crying Child"
];

const books = {
    trilogy: ["Silver Eyes", "Twisted Ones", "Fourth Closet"],
    frights: ["Into the Pit", "Fetch", "1:35 AM", "Step Closer", "Bunny Call", "Blackbird", 
        "The Cliff", "Gumdrop Angel", "The Puppet Carver", "Friendly Face", "Prankster", "Felix the Shark",],
    tales: ["Lally's Game", "HAPPS", "Somniphobia", "Submechanophobia",
        "The Bobbiedots Conclusion", "Nexie", "Tiger Rock", "B7-2"],
    files: ["The Freddy Files", "The Freddy Files: Updated Edition", "The Freddy Files: The Ultimate Guide",
        "Security Breach Files", "Security Breach Files: Updated Edition"],
    interactive: ["VIP", "The Week Before", "Return to the Pit", "Escape the Pizzaplex"],
    all: [
        "Silver Eyes", "Twisted Ones", "Fourth Closet",
        "Into the Pit", "Fetch", "1:35 AM", "Step Closer", "Bunny Call", "Blackbird", 
        "The Cliff", "Gumdrop Angel", "The Puppet Carver", "Friendly Face", "Prankster", "Felix the Shark",
        "Lally's Game", "HAPPS", "Somniphobia", "Submechanophobia",
        "The Bobbiedots Conclusion", "Nexie", "Tiger Rock", "B7-2", 
        "The Official Movie Novel",
        "VIP", "The Week Before", "Return to the Pit", "Escape the Pizzaplex",
        "The Freddy Files", "The Freddy Files: Updated Edition", "The Freddy Files: The Ultimate Guide",
        "Security Breach Files", "Security Breach Files: Updated Edition",
        "Character Encyclopedia", "Survival Logbook"
    ]
};

let currentGame = null; // Can be 'books' or 'characters'
let chosenName, guessedLetters, attempts, display;

function initializeGame(list) {
    chosenName = list[Math.floor(Math.random() * list.length)].toLowerCase();
    guessedLetters = new Set();
    attempts = 7;
    display = chosenName.split("").map(char => (char === " " ? " " : "_")); // Espaços não são ocultados
    updateDisplay();
    document.getElementById("message").textContent = "";
    document.getElementById("restart-button").style.display = "none";
}

function updateDisplay() {
    document.getElementById("display").textContent = display.join("");
    document.getElementById("guessed-letters").textContent = Array.from(guessedLetters).join(", ").toUpperCase();
    document.getElementById("attempts").textContent = attempts;
}

function handleGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();
    guessInput.value = "";

    if (!guess) {
        document.getElementById("message").textContent = "Please enter a guess.";
        return;
    }

    if (guess === chosenName) {
        document.getElementById("message").textContent = `Congratulations! You guessed it: ${capitalize(chosenName)}`;
        endGame();
        return;
    }

    if (guess.length === 1 && /[a-z]/.test(guess)) {
        if (guessedLetters.has(guess)) {
            document.getElementById("message").textContent = `You already guessed '${guess.toUpperCase()}'. Try again!`;
        } else if (chosenName.includes(guess)) {
            guessedLetters.add(guess);
            document.getElementById("message").textContent = `Good guess! '${guess.toUpperCase()}' is in the name.`;
            for (let i = 0; i < chosenName.length; i++) {
                if (chosenName[i] === guess) display[i] = guess;
            }
        } else {
            guessedLetters.add(guess);
            attempts--;
            document.getElementById("message").textContent = `Sorry, '${guess.toUpperCase()}' is not in the name.`;
        }
    } else {
        document.getElementById("message").textContent = "Invalid input. Please guess a single letter or the full name.";
    }

    updateDisplay();

    if (!display.includes("_")) {
        document.getElementById("message").textContent = `Congratulations! You guessed it: ${capitalize(chosenName)}`;
        endGame();
    } else if (attempts === 0) {
        document.getElementById("message").textContent = `Game over! The name was: ${capitalize(chosenName)}`;
        endGame();
    }
}

function endGame() {
    document.getElementById("restart-button").style.display = "inline-block";
}

function capitalize(name) {
    return name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

document.getElementById("choose-books").addEventListener("click", () => {
    currentGame = "books";
    populateCategories(Object.keys(books));
});

document.getElementById("choose-characters").addEventListener("click", () => {
    currentGame = "characters";
    populateCategories(["all"]);
});

function populateCategories(categories) {
    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = "";
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });
    document.getElementById("mode-selection").style.display = "none";
    document.getElementById("category-selection").style.display = "block";
}

document.getElementById("start-game").addEventListener("click", () => {
    const selectedCategory = document.getElementById("category").value;
    if (currentGame === "books") {
        initializeGame(books[selectedCategory]);
    } else if (currentGame === "characters") {
        initializeGame(characters);
    }
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("game-area").style.display = "block";
});

document.getElementById("guess-button").addEventListener("click", handleGuess);
document.getElementById("restart-button").addEventListener("click", () => {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("mode-selection").style.display = "block";
});
