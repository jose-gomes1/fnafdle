const fnafImages = {
    "Animatronic suit": "images/suit.png",
    "Cupcake": "images/cupcake.png",
    "Microphone": "images/microphone.png",
    "Scooper": "images/scooper.png",
    "Music box": "images/music-box.png",
    "Guitar": "images/guitar.png",
    "Hook": "images/hook.png",
    "Endo head": "images/endo-head.png",
    "Pizza slice": "images/pizza-slice.png",
    "Claw": "images/claw.png",
    "Bon Bon": "images/bon_bon.png",
    "V.A.N.N.I. Mask": "images/mask.png",
    "Glitchtrap Plushie": "images/plush.png",
    "Roxy's eyes": "images/eyes.png",
    "Monty's claws": "images/mclaw.png",
    "Chica's Voice Box": "images/box.png"
};

let currentWord = ""; 
let displayWord = []; 
let guessedLetters = new Set(); 
let attemptsLeft = 7; 
let currentList = []; 
let guessedWords = new Set();

// Game elements
const gameArea = document.getElementById("game-area");
const displayWordElement = document.getElementById("display-word");
const guessedLettersElement = document.getElementById("guessed-letters");
const remainingAttemptsElement = document.getElementById("remaining-attempts");
const messageElement = document.getElementById("message");
const suggestionsContainer = document.getElementById("suggestions");
const blurredImage = document.getElementById("blurred-image");

// Start the game
function startGame(wordList) {
    currentWord = wordList[Math.floor(Math.random() * wordList.length)]; // Preserve casing
    displayWord = Array.from(currentWord).map(char => (char === " " ? " " : "_"));
    guessedLetters.clear();
    guessedWords.clear();
    attemptsLeft = 7;
    currentList = wordList;

    updateDisplay();
    messageElement.textContent = "";
    gameArea.style.display = "block";

    document.getElementById("hint").innerHTML = `Hint: The object has <strong>${currentWord.replace(/ /g, "").length}</strong> letters.`;
    blurredImage.src = fnafImages[currentWord] || "images/default.png";
    blurredImage.style.filter = "blur(7px)";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("guess-input").value = "";
    suggestionsContainer.style.display = "none";
}



// Update the game display
function updateDisplay() {
    displayWordElement.textContent = displayWord.join("");
    guessedLettersElement.textContent = Array.from(guessedLetters).join(", ").toUpperCase();
    remainingAttemptsElement.textContent = attemptsLeft;

    const guessedWordsElement = document.getElementById("guessedWordsElement");
    guessedWordsElement.innerHTML = `<p>Guesses: ${Array.from(guessedWords).join(", ").toUpperCase()}</p>`;
}

// Handle a guess
function handleGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.trim();
    guessInput.value = "";

    if (!guess) {
        messageElement.textContent = "Please enter a guess!";
        return;
    }

    const normalizedGuess = guess.toLowerCase();
    const normalizedWord = currentWord.toLowerCase();

    if (normalizedGuess === normalizedWord) {
        handleCorrectGuess();
        return;
    }

    if (guess.length === 1) {
        if (guessedLetters.has(normalizedGuess)) {
            messageElement.textContent = `You already guessed '${guess.toUpperCase()}'. Try again!`;
            return;
        }
        guessedLetters.add(normalizedGuess);

        if (normalizedWord.includes(normalizedGuess)) {
            messageElement.textContent = `Good guess! '${guess.toUpperCase()}' is in the word.`;
            for (let i = 0; i < currentWord.length; i++) {
                if (normalizedWord[i] === normalizedGuess) displayWord[i] = currentWord[i];
            }
        } else {
            attemptsLeft--;
            messageElement.textContent = `Wrong guess! '${guess.toUpperCase()}' is not in the word.`;
        }
    } else {
        if (guessedWords.has(normalizedGuess)) {
            messageElement.textContent = `You already guessed the word '${guess.toUpperCase()}'. Try again!`;
            return;
        }
        guessedWords.add(normalizedGuess);

        if (normalizedGuess === normalizedWord) {
            handleCorrectGuess();
            return;
        } else {
            attemptsLeft--;
            messageElement.textContent = `Wrong guess! '${guess.toUpperCase()}' is not the word.`;
        }
    }

    updateDisplay();

    if (!displayWord.includes("_")) {
        handleCorrectGuess();
    } else if (attemptsLeft === 0) {
        messageElement.textContent = `Game over! The object was: ${currentWord.toUpperCase()}`;
        endGame();
    }
}


// Handle correct guess
function handleCorrectGuess() {
    displayWord = currentWord.split("");
    guessedWords.add(currentWord);
    updateDisplay();
    messageElement.textContent = `Congratulations! You guessed the object: ${currentWord.toUpperCase()}`;
    blurredImage.style.filter = "none"; // Reveal image
    endGame();
}

// Filter suggestions based on input
function filterSuggestions(input) {
    const query = input.trim().toLowerCase();
    if (!query) {
        suggestionsContainer.style.display = "none";
        return;
    }

    const filteredList = currentList.filter(item => 
        item.toLowerCase().includes(query) // Match case-insensitively
    );

    suggestionsContainer.innerHTML = filteredList
        .map(item => `<li class="suggestion">${item}</li>`)
        .join("");

    suggestionsContainer.style.display = filteredList.length > 0 ? "block" : "none";

    document.querySelectorAll("#suggestions li").forEach(li => {
        li.addEventListener("click", () => {
            document.getElementById("guess-input").value = li.textContent;
            suggestionsContainer.style.display = "none";
            handleGuess();
        });
    });
}


// End the game
function endGame() {
    document.getElementById("restart-button").style.display = "block";
}

// Event listeners
document.getElementById("guess-button").addEventListener("click", handleGuess);
document.getElementById("guess-input").addEventListener("input", (e) => {
    filterSuggestions(e.target.value); // Filter suggestions as the user types
});
document.getElementById("restart-button").addEventListener("click", () => startGame(Object.keys(fnafImages)));
document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "../index.html";
});


// Initialize game
document.addEventListener("DOMContentLoaded", () => {
    startGame(Object.keys(fnafImages));
});
