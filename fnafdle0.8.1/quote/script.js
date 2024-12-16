// Array of quotes and the characters who said them
const quotes = [
    { quote: "The devil has knocked on my door before, and I've turned him away.", character: "Dave Miller" },
    { quote: "It was a system designed to control the choreography for the shows. Now I control the system. I control the choreography", character: "Springtrap" },
    { quote: "Anyone can discover a fire already burning. As we have here.", character: "William Afton" },
    { quote: "Are we playing hide-and-seek? I know how to play. I learned it a long time ago.", character: "Mimic1  " },
    { quote: "This ends, for all of us. End communication.", character: "Henry" },
    { quote: "(Not Official) Have you ever heard of Among Us, Gregory? I know it will be hard for you to be sus, but I know you can do it Gregory!", character: "Glamrock Freddy" },
    { quote: "It's me. I think I need to explain a few things. That thing in the sinkhole tricked you. I really don't know what it is, but it's been trapped down here a really long time.", character: "Gregory" },
    { quote: "Lamb chop, there's nothing I want from you except your life.", character: "Count The Ways Funtime Freddy" },
    { quote: "I am Agony.", character: "The Miscreation" },
    { quote: "I made your wish come true, Sarah. And in return... Well, you certainly made my wishes come true.", character: "Eleanor" },
    { quote: "Hello, Greg. HRU.", character: "Fetch" },
    { quote: "A strange cloaked figure roaming the streets", character: "Everette Larson" },
    { quote: "Thanks for taking care of me", character: "Jake McNally" },
    { quote: "I got into his soul, made sure he couldn't move on when he should've died. I remember I wanted him to suffer the way he made me suffer.", character: "Andrew" },
    { quote: "Once I made the decision, the rest of it was out of my control. I think I made a decision like that today with that Bunny Call.", character: "Bob Mackenzie" },
    { quote: "I always do my best work! In fact, I would be doing some of it right now if you weren't wasting my time in this pointless meeting.", character: "Matt" },
    { quote: "Daddy.", character: "Springtrap" },
    { quote: "He told me everything.", character: "Faz-Goo" },
    { quote: "Our animatronic, 'the Blackbird'... will get you to confess your darkest secrets, and then when you do, it comes to punish you for your sins.", character: "Sam O'Neil" },
    { quote: "They only started to think I was the bad one when they figured out you were the good one.", character: "Alec" },
    { quote: "It's time.", character: "Ella" },
    { quote: "It's an animatronic suit. It has animatronic, um, abilities, I guess, but it can be worn like a costume.", character: "Kelsey" },
    { quote: "It's just hard. I'm not over Amber yet.", character: "Stanley" },
    { quote: "Are we all ready to rock and roll?", character: "Freddy Fazbear" },
    { quote: "You know, when i see an opportunity for fun, I take it. No regrets.", character: "Parker" },
    { quote: "It's me", character: "Golden Freddy" },
];

// Array of characters for suggestions
const allCharacters = [
    "William Afton", "Springtrap", "Dave Miller", "Mimic1", "Henry", "Glamrock Freddy", "Gregory", "Count The Ways Funtime Freddy", "The Miscreation", "Eleanor", "Fetch", 
    "Everette Larson", "Jake McNally", "Andrew", "Bob Mackenzie", "Matt", "Faz-Goo", "Sam O'Neil", "Alec", "Ella", "Kelsey", "Stanley", "Freddy Fazbear", "Parker", "Golden Freddy"
];

let currentQuote = null;
let remainingAttempts = 7;
let guessedCharacters = [];
let gameOver = false;

// Start a new game by picking a random quote
function startGame() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    remainingAttempts = 7;
    guessedCharacters = [];
    gameOver = false;
    
    document.getElementById("quote-display").textContent = `"${currentQuote.quote}"`;
    document.getElementById("attempts-left").textContent = remainingAttempts;
    document.getElementById("guessed-letters-content").textContent = guessedCharacters.join(", ");
    document.getElementById("message").textContent = "";
    document.getElementById("guess-input").value = "";
}

// Handle user input for guesses
document.getElementById("submit-guess").addEventListener("click", function () {
    if (gameOver) return;

    const userGuess = document.getElementById("guess-input").value.trim().toLowerCase();
    if (!userGuess) return;

    // Check if the guess is correct
    if (userGuess.toLowerCase() === currentQuote.character.toLowerCase()) {
        document.getElementById("message").textContent = "Correct! Well done!";
        triggerConfetti();
        gameOver = true;
    } else {
        remainingAttempts--;
        guessedCharacters.push(userGuess);
        document.getElementById("guessed-letters-content").textContent = guessedCharacters.join(", ");
        document.getElementById("attempts-left").textContent = remainingAttempts;

        if (remainingAttempts === 0) {
            document.getElementById("message").textContent = `Game Over! The correct character was ${currentQuote.character}.`;
            gameOver = true;
        } else {
            document.getElementById("message").textContent = "Incorrect! Try again.";
        }
    }

    document.getElementById("guess-input").value = "";
});

// Handle the character name suggestions
document.getElementById("guess-input").addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    if (query) {
        filterSuggestions(query);
    } else {
        clearSuggestions();
    }
});

// Filter suggestions based on the user input
function filterSuggestions(query) {
    const filteredSuggestions = allCharacters.filter(character => character.toLowerCase().includes(query));
    
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = ''; // Clear the existing suggestions

    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", function () {
            handleSelection(suggestion);
            submitGuess(suggestion); // Automatically submit guess when suggestion is clicked
        });
        suggestionsList.appendChild(li);
    });
}

// Clear suggestions when the input is empty
function clearSuggestions() {
    document.getElementById("suggestions").innerHTML = '';
}   

function handleSelection(selectedCharacter) {
    document.getElementById("guess-input").value = selectedCharacter;
}

function submitGuess(userGuess) {
    if (gameOver) return;

    // Check if the guess is correct
    if (userGuess.toLowerCase() === currentQuote.character.toLowerCase()) {
        document.getElementById("message").textContent = "Correct! Well done!";
        triggerConfetti();
        gameOver = true;
    } else {
        remainingAttempts--;
        guessedCharacters.push(userGuess);
        document.getElementById("guessed-letters-content").textContent = guessedCharacters.join(", ");
        document.getElementById("attempts-left").textContent = remainingAttempts;

        if (remainingAttempts === 0) {
            document.getElementById("message").textContent = `Game Over! The correct character was ${currentQuote.character}.`;
            gameOver = true;
        } else {
            document.getElementById("message").textContent = "Incorrect! Try again.";
        }
    }

    document.getElementById("guess-input").value = ""; // Clear input field
}

// Trigger confetti animation on correct guess
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Initialize the game when the page loads
window.onload = startGame;

// Restart the game
document.getElementById("restart-button").addEventListener("click", startGame);
startGame();