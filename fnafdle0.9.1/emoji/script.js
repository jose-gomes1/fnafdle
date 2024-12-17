// List of FNaF characters and their names along with emojis
const characters = [
    { emoji: "🐻🎤", name: "Freddy" },
    { emoji: "🐰🎸", name: "Bonnie" },
    { emoji: "🐤🍕", name: "Chica" },
    { emoji: "🦊🏴‍☠️", name: "Foxy" },
    { emoji: "👑🐻", name: "Golden Freddy" },
    { emoji: "⚙️👑🐻", name: "Withered Golden Freddy" },
    { emoji: "⚙️🦊🏴‍☠️", name: "Withered Foxy" },
    { emoji: "⚙️🐤🍕", name: "Withered Chica" },
    { emoji: "⚙️🐰🎸", name: "Withered Bonnie" },
    { emoji: "⚙️🐻🎤", name: "Withered Freddy" },
    { emoji: "🧸🐻🎤", name: "Toy Freddy" },
    { emoji: "🧸🐰🎸", name: "Toy Bonnie" },
    { emoji: "🧸🐤🍕", name: "Toy Chica" },
    { emoji: "🦊💮", name: "Mangle" },
    { emoji: "🎭🎵", name: "Puppet" },
    { emoji: "👦🎈", name: "Balloon Boy" },
    { emoji: "👧🎈", name: "JJ" },
    { emoji: "🟣🐻", name: "Shadow Freddy" },
    { emoji: "⚫", name: "RWQFSFASXC" },
    { emoji: "🐇🩸", name: "Springtrap" },
    { emoji: "🍈🐻", name: "Phantom Freddy" },
    { emoji: "🍈🦊🏴‍☠️", name: "Phantom Foxy" },
    { emoji: "🍈🐤", name: "Phantom Chica" },
    { emoji: "🍈🎈", name: "Phantom Balloon Boy" },
    { emoji: "🍈🎭", name: "Phantom Puppet" },
    { emoji: "🍈🦊", name: "Phantom Mangle" }
];

// Current character and guesses tracking
let currentCharacter = null;
let guessedLetters = [];
let displayWord = [];
let attemptsLeft = 7;
let guessedWords = new Set();

// Function to choose a random character
function chooseNewCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    currentCharacter = characters[randomIndex];
    displayWord = Array(currentCharacter.name.length).fill('_');
    updateDisplayWord();
    guessedLetters = [];
    updateGuesses();
    document.getElementById("emoji-display").innerText = currentCharacter.emoji;
    document.getElementById("message").innerText = "";
    document.getElementById("guess-input").value = "";
    document.getElementById("suggestions").style.display = "none"; // Hide suggestions initially
    attemptsLeft = 7; // Reset attempts for new character
    document.getElementById("remaining-attempts").innerText = `Remaining Attempts: ${attemptsLeft}`;
}

// Function to update the display word
function updateDisplayWord() {
    document.getElementById("display-word").innerText = displayWord.join(' ');
}

// Function to update the guessed letters list
function updateGuesses() {
    const guessedLettersElement = document.getElementById("guessed-letters-content");
    guessedLettersElement.innerText = guessedLetters.join(", ");
}

// Function to check the guessed letter or word
function checkGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.trim().toLowerCase();

    // Check if it's a full-word guess
    if (guess === currentCharacter.name.toLowerCase()) {
        handleCorrectGuess();
        return;
    }

    // Check if it's a single letter guess
    if (guess.length === 1) {
        if (guessedLetters.includes(guess)) {
            document.getElementById("message").innerText = `You already guessed '${guess.toUpperCase()}'. Try again!`;
            return;
        }

        guessedLetters.push(guess);
        let correctGuess = false;

        for (let i = 0; i < currentCharacter.name.length; i++) {
            if (currentCharacter.name[i].toLowerCase() === guess) {
                displayWord[i] = currentCharacter.name[i].toUpperCase();
                correctGuess = true;
            }
        }

        if (correctGuess) {
            document.getElementById("message").innerText = `🎉 Correct letter!`;
        } else {
            attemptsLeft--;
            document.getElementById("message").innerText = `❌ Incorrect letter. Try again!`;
        }

        updateDisplayWord();
        updateGuesses();
    } else {
        // If it's an invalid guess (not a letter or word)
        document.getElementById("message").innerText = "Please enter a valid letter or the full name!";
    }

    if (!displayWord.includes('_')) {
        handleCorrectGuess();
    } else if (attemptsLeft === 0) {
        document.getElementById("message").innerText = `Game over! The character was: ${currentCharacter.name}`;
    }

    document.getElementById("remaining-attempts").innerText = `Remaining Attempts: ${attemptsLeft}`;
    guessInput.value = "";
}

// Function to handle a correct guess (either letter or full name)
function handleCorrectGuess() {
    displayWord = currentCharacter.name.split("");
    guessedLetters = Array.from(new Set(guessedLetters)); // Make sure there are no duplicate guesses
    updateDisplayWord();
    updateGuesses();

    // Trigger confetti animation
    triggerConfetti();

    document.getElementById("message").innerText = `🎉 You guessed the character: ${currentCharacter.name}!`;
    document.getElementById("remaining-attempts").innerText = "Game Over!";
    document.getElementById("restart-button").style.display = "block"; // Show restart button
}

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Function to filter suggestions based on input
function filterSuggestions(event) {
    const query = event.target.value.trim().toLowerCase();
    const suggestionsContainer = document.getElementById("suggestions");

    if (!query) {
        suggestionsContainer.style.display = "none";
        return;
    }

    const filteredSuggestions = characters.filter(character => character.name.toLowerCase().includes(query));
    suggestionsContainer.innerHTML = filteredSuggestions.map(character => {
        return `<li class="suggestion">${character.name}</li>`;
    }).join("");

    suggestionsContainer.style.display = filteredSuggestions.length > 0 ? "block" : "none";

    // Add event listeners to suggestions
    document.querySelectorAll("#suggestions li").forEach(li => {
        li.addEventListener("click", () => {
            document.getElementById("guess-input").value = li.textContent;
            suggestionsContainer.style.display = "none";
            checkGuess();
        });
    });
}

// Event listeners
document.getElementById("submit-guess").addEventListener("click", checkGuess);
document.getElementById("guess-input").addEventListener("input", (e) => filterSuggestions(e));
document.getElementById("restart-button").addEventListener("click", chooseNewCharacter);

// Initialize the game
chooseNewCharacter();
