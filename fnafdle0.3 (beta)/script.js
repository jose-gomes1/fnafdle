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
        "The Cliff", "Gumdrop Angel", "The Puppet Carver", "Friendly Face", "Prankster", "Felix the Shark"],
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

let currentWord = ""; // The word to guess
let displayWord = []; // The current displayed state of the word
let guessedLetters = new Set(); // Already guessed letters
let attemptsLeft = 7; // Remaining attempts
let currentList = []; // Current active list (characters or books)
let currentIndex = -1; // Tracks the current highlighted suggestion

// Game elements
const modeSelection = document.getElementById("mode-selection");
const bookCategories = document.getElementById("book-categories");
const gameArea = document.getElementById("game-area");
const displayWordElement = document.getElementById("display-word");
const guessedLettersElement = document.getElementById("guessed-letters");
const remainingAttemptsElement = document.getElementById("remaining-attempts");
const messageElement = document.getElementById("message");
const suggestionsContainer = document.getElementById("suggestions");

// Initialize the game
function startGame(wordList) {
    currentWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    displayWord = Array.from(currentWord).map(char => (char === " " ? " " : "_"));
    guessedLetters.clear();
    attemptsLeft = 7;
    currentList = wordList;

    updateDisplay();
    messageElement.textContent = "";
    gameArea.style.display = "block";
    modeSelection.style.display = "none";
    bookCategories.style.display = "none";
    document.getElementById("hint").innerHTML = `Hint: The word has <strong>${currentWord.replace(/ /g, "").length}</strong> letters.`;
    
    // Hide the suggestions initially when the game starts
    suggestionsContainer.style.display = "none"; // No suggestions displayed at start
    suggestionsContainer.innerHTML = ""; // Clear any previous suggestions
    currentIndex = -1; // Reset the suggestion index
}

// Update the game display
function updateDisplay() {
    displayWordElement.textContent = displayWord.join("");
    guessedLettersElement.textContent = Array.from(guessedLetters).join(", ").toUpperCase();
    remainingAttemptsElement.textContent = attemptsLeft;
}

// Handle guesses
function handleGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.trim().toLowerCase();
    guessInput.value = "";

    if (!guess) {
        messageElement.textContent = "Please enter a guess!";
        return;
    }

    if (guess === currentWord) {
        displayWord = currentWord.split("");
        messageElement.textContent = `Congratulations! You guessed the word: ${currentWord.toUpperCase()}`;
        endGame();
        return;
    }

    if (guess.length === 1) {
        if (guessedLetters.has(guess)) {
            messageElement.textContent = `You already guessed '${guess.toUpperCase()}'. Try again!`;
            return;
        }

        guessedLetters.add(guess);

        if (currentWord.includes(guess)) {
            messageElement.textContent = `Good guess! '${guess.toUpperCase()}' is in the word.`;
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === guess) displayWord[i] = guess;
            }
        } else {
            attemptsLeft--;
            messageElement.textContent = `Wrong guess! '${guess.toUpperCase()}' is not in the word.`;
        }
    } else {
        messageElement.textContent = "Invalid input. Guess a single letter or the full word.";
    }

    updateDisplay();

    if (!displayWord.includes("_")) {
        messageElement.textContent = `Congratulations! You guessed the word: ${currentWord.toUpperCase()}`;
        endGame();
    } else if (attemptsLeft === 0) {
        messageElement.textContent = `Game over! The word was: ${currentWord.toUpperCase()}`;
        endGame();
    }
}

// Filter suggestions based on input
function filterSuggestions(input) {
    const query = input.trim().toLowerCase();
    if (!query) {
        suggestionsContainer.style.display = "none"; // Hide suggestions when no input
        return;
    }

    const filteredList = currentList.filter(item => item.toLowerCase().includes(query));

    // Display suggestions
    suggestionsContainer.innerHTML = filteredList
        .map(item => `<li class="suggestion">${item}</li>`)
        .join("");
    suggestionsContainer.style.display = "block"; // Show suggestions only after typing

    // Add click events to suggestions
    document.querySelectorAll("#suggestions li").forEach(li => {
        li.addEventListener("click", () => {
            document.getElementById("guess-input").value = li.textContent;
            suggestionsContainer.style.display = "none";
            handleGuess(); // Automatically make a guess if user selects a suggestion
        });
    });
}

// End the game
function endGame() {
    document.getElementById("restart-button").style.display = "block";
}

// Event listeners for characters and books (unchanged)
document.getElementById("choose-characters").addEventListener("click", () => startGame(characters));
document.getElementById("choose-books").addEventListener("click", () => {
    modeSelection.style.display = "none"; // Hide mode selection
    bookCategories.style.display = "block"; // Show book categories selection
});

// Event listener for book category selection
document.querySelectorAll("#book-categories button").forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        startGame(books[category]);
    });
});

document.getElementById("guess-button").addEventListener("click", handleGuess);
function filterSuggestions(input) {
    const query = input.trim().toLowerCase();
    if (!query) {
        suggestionsContainer.style.display = "none"; // Hide suggestions when no input
        return;
    }

    const filteredList = currentList.filter(item => item.toLowerCase().includes(query));

    // Clear suggestions before adding new ones
    suggestionsContainer.innerHTML = "";
    
    if (filteredList.length === 0) {
        suggestionsContainer.style.display = "none"; // Hide suggestions if no matches found
        return;
    }

    // Display suggestions
    suggestionsContainer.innerHTML = filteredList
        .map(item => `<li class="suggestion">${item}</li>`)
        .join("");
    suggestionsContainer.style.display = "block"; // Show suggestions

    // Add click events to suggestions
    document.querySelectorAll("#suggestions li").forEach(li => {
        li.addEventListener("click", () => {
            document.getElementById("guess-input").value = li.textContent;
            suggestionsContainer.style.display = "none";
            handleGuess(); // Automatically make a guess if user selects a suggestion
        });
    });
}
document.getElementById("guess-input").addEventListener("input", (e) => filterSuggestions(e.target.value));

document.getElementById("restart-button").addEventListener("click", () => {
    gameArea.style.display = "none";
    modeSelection.style.display = "block";
    bookCategories.style.display = "none"; // Hide book categories after restart
});

// Arrow key navigation for the suggestions list
document.getElementById("guess-input").addEventListener("keydown", (e) => {
    const suggestions = document.getElementById("suggestions").getElementsByClassName("suggestion");

    if (suggestions.length > 0) {
        if (e.key === "ArrowDown") {
            if (currentIndex < suggestions.length - 1) {
                currentIndex++;
                suggestions[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        } else if (e.key === "ArrowUp") {
            if (currentIndex > 0) {
                currentIndex--;
                suggestions[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        } else if (e.key === "Enter" && currentIndex >= 0) {
            // Select the highlighted suggestion when Enter is pressed
            document.getElementById("guess-input").value = suggestions[currentIndex].textContent;
            handleGuess(); // Automatically submit the guess
            suggestionsContainer.style.display = "none"; // Hide suggestions after selection
        }

        // Highlight the selected suggestion
        Array.from(suggestions).forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add("highlighted");
            } else {
                item.classList.remove("highlighted");
            }
        });
    }
});

// CSS to highlight the selected suggestion
const style = document.createElement('style');
style.innerHTML = `
    .highlighted {
        background-color: #f39c12;
        color: #fff;
    }
`;
document.head.appendChild(style);
