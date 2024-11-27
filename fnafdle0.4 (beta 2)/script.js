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
    "Withered Golden Freddy", "Bidybab", "Electrobab", "Minireena", "Bon Bon",
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
        "The Cliffs", "Gumdrop Angel", "The Puppet Carver", "Friendly Face", "Prankster", "Felix the Shark"],
    tales: ["Lally's Game", "HAPPS", "Somniphobia", "Submechanophobia",
        "The Bobbiedots Conclusion", "Nexie", "Tiger Rock", "B7-2"],
    files: ["The Freddy Files", "The Freddy Files: Updated Edition", "The Freddy Files: The Ultimate Guide",
        "Security Breach Files", "Security Breach Files: Updated Edition"],
    interactive: ["VIP", "The Week Before", "Return to the Pit", "Escape the Pizzaplex"],
    all: [
        "Silver Eyes", "Twisted Ones", "Fourth Closet",
        "Into the Pit", "Fetch", "1:35 AM", "Step Closer", "Bunny Call", "Blackbird", 
        "The Cliffs", "Gumdrop Angel", "The Puppet Carver", "Friendly Face", "Prankster", "Felix the Shark",
        "Lally's Game", "HAPPS", "Somniphobia", "Submechanophobia",
        "The Bobbiedots Conclusion", "Nexie", "Tiger Rock", "B7-2", 
        "The Official Movie Novel",
        "VIP", "The Week Before", "Return to the Pit", "Escape the Pizzaplex",
        "The Freddy Files", "The Freddy Files: Updated Edition", "The Freddy Files: The Ultimate Guide",
        "Security Breach Files", "Security Breach Files: Updated Edition",
        "Character Encyclopedia", "Survival Logbook"
    ]
};

const locations = [
    "Freddy Fazbear's Pizza (1983)", "New and Improved Freddy Fazbear's Pizza (1987)", "Freddy Fazbear's Pizza (Fnaf 1)", "Fredbear's Family Dinner",
    "Freddy Fazbear's Pizza Place", "Fazbear's Fright", "Freddy Fazbear's Mega Pizza Plex", "House (Fnaf 4)", "Chica's Party World", "Circus Baby's Entertainment and Rentals",
    "Circus Baby's Pizza World", "El Chip's Diner", "Freddy Fazbear Virtual Experience", "JR's", "Sparky's Coffee Shop", "Afton Robotics, LLC", "Jeff's Pizza"
];

const fnafImages = {
    //characters
    "Freddy Fazbear": "images/characters/freddy_fazbear.png",
    "Bonnie": "images/characters/bonnie.png",
    "Chica": "images/characters/chica.png",
    "Foxy": "images/characters/foxy.png",
    "Golden Freddy": "images/characters/golden_freddy.png",
    "Springtrap": "images/characters/springtrap.png",
    "Ballora": "images/characters/ballora.png",
    "Circus Baby": "images/characters/circus_baby.png",
    "Ennard": "images/characters/ennard.png",
    "Molten Freddy": "images/characters/molten_freddy.png",
    "Scrap Baby": "images/characters/scrap_baby.png",
    "Scraptrap": "images/characters/scraptrap.png",
    "Dark Springtrap": "images/characters/dark_springtrap.png",
    "Lefty": "images/characters/lefty.png",
    "Rockstar Freddy": "images/characters/rockstar_freddy.png",
    "Rockstar Bonnie": "images/characters/rockstar_bonnie.png",
    "Rockstar Chica": "images/characters/rockstar_chica.png",
    "Rockstar Foxy": "images/characters/rockstar_foxy.png",
    "Carnie": "images/characters/carnie.png",
    "Happy Frog": "images/characters/happy_frog.png",
    "Mr. Hippo": "images/characters/mr_hippo.png",
    "Orville Elephant": "images/characters/orville_elephant.png",
    "Nedd Bear": "images/characters/nedd_bear.png",
    "Pigpatch": "images/characters/pigpatch.png",
    "Funtime Freddy": "images/characters/funtime_freddy.png",
    "Funtime Foxy": "images/characters/funtime_foxy.png",
    "Funtime Chica": "images/characters/funtime_chica.png",
    "Nightmare": "images/characters/nightmare.png",
    "Nightmare Fredbear": "images/characters/nightmare_fredbear.png",
    "Nightmare Freddy": "images/characters/nightmare_freddy.png",
    "Nightmare Bonnie": "images/characters/nightmare_bonnie.png",
    "Nightmare Chica": "images/characters/nightmare_chica.png",
    "Nightmare Foxy": "images/characters/nightmare_foxy.png",
    "Nightmare Mangle": "images/characters/nightmare_mangle.png",
    "Nightmare Balloon Boy": "images/characters/nightmare_balloon_boy.png",
    "Phantom Freddy": "images/characters/phantom_freddy.png",
    "Phantom Chica": "images/characters/phantom_chica.png",
    "Phantom Foxy": "images/characters/phantom_foxy.png",
    "Phantom Balloon Boy": "images/characters/phantom_balloon_boy.png",
    "Phantom Puppet": "images/characters/phantom_puppet.png",
    "Phantom Mangle": "images/characters/phantom_mangle.png",
    "Shadow Freddy": "images/characters/shadow_freddy.png",
    "RWQFSFASXC": "images/characters/rwqfsfasxc.png",
    "Helpy": "images/characters/helpy.png",
    "Dee Dee": "images/characters/dee_dee.png",
    "XOR": "images/characters/xor.png",
    "Old Man Consequences": "images/characters/old_man_consequences.png",
    "Vengeful Spirit": "images/characters/vengeful_spirit.png",
    "Toy Freddy": "images/characters/toy_freddy.png",
    "Toy Chica": "images/characters/toy_chica.png",
    "Toy Bonnie": "images/characters/toy_bonnie.png",
    "Mangle": "images/characters/mangle.png",
    "Balloon Boy": "images/characters/balloon_boy.png",
    "Puppet": "images/characters/puppet.png",
    "JJ": "images/characters/jj.png",
    "Withered Freddy": "images/characters/withered_freddy.png",
    "Withered Bonnie": "images/characters/withered_bonnie.png",
    "Withered Chica": "images/characters/withered_chica.png",
    "Withered Foxy": "images/characters/withered_foxy.png",
    "Withered Golden Freddy": "images/characters/withered_golden_freddy.png", 
    "Bidybab": "images/characters/bidybab.png",
    "Electrobab": "images/characters/electrobab.png",
    "Minireena": "images/characters/minireena.png",
    "Bon Bon": "images/characters/bon_bon.png",
    "Bonnet": "images/characters/bonnet.png",
    "Yenndo": "images/characters/yenndo.png",
    "Music Man": "images/characters/music_man.png",
    "Glamrock Freddy": "images/characters/glamrock_freddy.png",
    "Glamrock Chica": "images/characters/glamrock_chica.png",
    "Montegomery Gator": "images/characters/monty.png",
    "Roxanne Wolf": "images/characters/roxy.png",
    "DJ Music Man": "images/characters/dj_music_man.png",
    "Wind-Up Music Man": "images/characters/wind_up_music_man.png",
    "Glitchtrap": "images/characters/glitchtrap.png",
    "Dreadbear": "images/characters/dreadbear.png",
    "Vanny": "images/characters/vanny.png",
    "Helpi": "images/characters/helpi.png",
    "Burntrap": "images/characters/burntrap.png",
    "Tangle": "images/characters/tangle.png",
    "Sun": "images/characters/sun.png",
    "Moon": "images/characters/moon.png",
    "STAFF Bot": "images/characters/staff_bot.png",
    "Map Bot": "images/characters/map_bot.png",
    "Mask Bot": "images/characters/mask_bot.png",
    "The Mimic": "images/characters/mimic.png",
    "Shattered Roxy": "images/characters/shattered_roxy.png",
    "Shattered Monty": "images/characters/shattered_monty.png",
    "Shattered Chica": "images/characters/shattered_chica.png",
    "Glamrock Bonnie": "images/characters/glamrock_bonnie.png",
    "MXES": "images/characters/mxes.png",
    "Ruined Chica": "images/characters/ruined_chica.png",
    "Ruined Roxy": "images/characters/ruined_roxy.png",
    "Ruined Monty": "images/characters/ruined_monty.png",
    "Ruined DJ Music Man": "images/characters/ruined_dj_music_man.png",
    "Ruined Wind-Up Music Man": "images/characters/ruined_wind_up_music_man.png",
    "Nightmare Staff Bot": "images/characters/nightmare_staff_bot.png",
    "Jack-O-Chica": "images/characters/jack_o_chica.png",
    "Jack-O-Bonnie": "images/characters/jack_o_bonnie.png",
    "Nightmarionne": "images/characters/nightmarionne.png",
    "Plushtrap": "images/characters/plushtrap.png",
    "Security Puppet": "images/characters/security_puppet.png",
    "Captain Foxy": "images/characters/captain_foxy.png",
    "Jack-O-Moon": "images/characters/jack_o_moon.png",
    "Eclipse": "images/characters/eclipse.png",
    "Ruined Freddy": "images/characters/ruined_freddy.png",
    "Springbonnie": "images/characters/springbonnie.png",
    "Fredbear": "images/characters/fredbear.png",
    "Mystic Hippo": "images/characters/mystic_hippo.png",
    "Wet Floor Bot": "images/characters/wet_floor_bot.png",
    "Freddy Frostbear": "images/characters/freddy_frostbear.png",
    "8-Bit Baby": "images/characters/8_bit_baby.png",
    "Endo-01": "images/characters/endo_01.png",
    "Endo-02": "images/characters/endo_02.png",
    "Nightmare Endo": "images/characters/nightmare_endo.png",
    "Glamrock Endo": "images/characters/glamrock_endo.png",
    "Freddles": "images/characters/freddles.png",
    "Grimm Foxy": "images/characters/grimm_foxy.png",
    "Lolbit": "images/characters/lolbit.png",
    "Lemonade Clown": "images/characters/lemonade_clown.png",
    "Fruit Punch Clown": "images/characters/fruit_punch_clown.png",
    "Jackie": "images/characters/jackie.png",
    "Head Chef Bot": "images/characters/head_chef_bot.png",
    "Hand Unit": "images/characters/hand_unit.png",
    "Mr Cupcake": "images/characters/mr_cupcake.png",
    "Nightmare Cupcake": "images/characters/nightmare_cupcake.png",
    "Jack-O-Lantern": "images/characters/jack_o_lantern.png",
    "Dark Freddy": "images/characters/dark_freddy.png",
    "Neon Bonnie": "images/characters/neon_bonnie.png",
    "Neon Chica": "images/characters/neon_chica.png",
    "Burnt Foxy": "images/characters/burnt_foxy.png",
    "Shadow Mangle": "images/characters/shadow_mangle.png",
    "Dark Foxy": "images/characters/dark_foxy.png",
    "Party Freddy": "images/characters/party_freddy.png",
    "Bucket Bob": "images/characters/bucket_bob.png",
    "Mr Can-Do": "images/characters/mr_can_do.png",
    "Number 1 Crate" : "images/characters/number_1_crate.png",
    "Pan Stan": "images/characters/pan_stan.png",
    "Paper Pals": "images/characters/paper_pals.png",
    "Candy Cadet": "images/characters/candy_cadet.png",
    "El Chip": "images/characters/el_chip.png",
    "Tilt": "images/characters/tilt.png",
    "Phone Guy": "images/characters/phone_guy.png",
    "Phone Dude": "images/characters/phone_dude.png",
    "Gregory": "images/characters/gregory.png",
    "Vanessa": "images/characters/vanessa.png",
    "Michael Afton": "images/characters/michael_afton.png",
    "Cassie": "images/characters/cassie.png",
    "Jeremy Fitzgerald": "images/characters/jeremy_fitzgerald.png",
    "Elizabeth Afton": "images/characters/elizabeth_afton.png",
    "William Afton": "images/characters/william_afton.png",
    "Crying Child": "images/characters/crying_child.png",
    //books
    "Silver Eyes": "images/books/trilogy/silver_eyes.png", 
    "Twisted Ones": "images/books/trilogy/twisted_ones.png", 
    "Fourth Closet": "images/books/trilogy/fourth_closet.png",
    "Into the Pit": "images/books/frights/itp.png", 
    "Fetch": "images/books/frights/fetch.png", 
    "1:35 AM": "images/books/frights/135_am.png", 
    "Step Closer": "images/books/frights/step_closer.png", 
    "Bunny Call": "images/books/frights/bunny_call.png", 
    "Blackbird": "images/books/frights/blackbird.png", 
    "The Cliffs": "images/books/frights/the_cliffs.png", 
    "Gumdrop Angel": "images/books/frights/gumdrop_angel.png", 
    "The Puppet Carver": "images/books/frights/the_puppet_carver.png", 
    "Friendly Face": "images/books/frights/friendly_face.png", 
    "Prankster": "images/books/frights/prankster.png", 
    "Felix the Shark": "images/books/frights/felix_the_shark.png",
    "Lally's Game": "images/books/tales/lallys_game.png", 
    "HAPPS": "images/books/tales/happs.png", 
    "Somniphobia": "images/books/tales/somniphobia.png", 
    "Submechanophobia": "images/books/tales/submechanophobia.png",
    "The Bobbiedots Conclusion": "images/books/tales/the_bobbiedots_conclusion.png", 
    "Nexie": "images/books/tales/nexie.png", 
    "Tiger Rock": "images/books/tales/tiger_rock.png", 
    "B7-2": "images/books/tales/b7_2.png", 
    "The Official Movie Novel": "images/books/movie_novel.png",
    "VIP": "images/books/interactive/vip.png", 
    "The Week Before": "images/books/interactive/the_week_before.png", 
    "Return to the Pit": "images/books/interactive/return_to_the_pit.png", 
    "Escape the Pizzaplex": "images/books/interactive/escape_the_pizzaplex.png",
    "The Freddy Files": "images/books/files/the_freddy_files.png", 
    "The Freddy Files: Updated Edition": "images/books/files/the_freddy_files_updated_edition.png", 
    "The Freddy Files: The Ultimate Guide": "images/books/files/the_freddy_files_the_ultimate_guide.png",
    "Security Breach Files": "images/books/files/security_breach_files.png", 
    "Security Breach Files: Updated Edition": "images/books/files/security_breach_files_updated_edition.png",
    "Character Encyclopedia": "images/books/character_encyclopedia.png", 
    "Survival Logbook": "images/books/survival_logbook.png",
    //locations
    "Freddy Fazbear's Pizza (1983)": "images/area/83.png", 
    "New and Improved Freddy Fazbear's Pizza (1987)": "images/area/fnaf2.png", 
    "Freddy Fazbear's Pizza (Fnaf 1)": "images/area/fnaf1.png", 
    "Fredbear's Family Dinner": "images/area/fredbear.png",
    "Freddy Fazbear's Pizza Place": "images/area/fnaf6.png", 
    "Fazbear's Fright": "images/area/fnaf3.png", 
    "Freddy Fazbear's Mega Pizza Plex": "images/area/pizzaplex.png", 
    "House (Fnaf 4)": "images/area/fnaf4.png", 
    "Chica's Party World": "images/area/chicas_party.png", 
    "Circus Baby's Entertainment and Rentals": "images/area/rental.png",
    "Circus Baby's Pizza World": "images/area/baby.png", 
    "El Chip's Diner": "images/area/el_chips.png", 
    "Freddy Fazbear Virtual Experience": "images/area/vr.png", 
    "JR's": "images/area/jrs.png", 
    "Sparky's Coffee Shop": "images/area/sparky.png", 
    "Afton Robotics, LLC": "images/area/afton.png",
    "Jeff's Pizza": "images/area/jeff.png"
};

// Game state variables
let currentWord = ""; 
let displayWord = []; 
let guessedLetters = new Set(); 
let attemptsLeft = 7; 
let currentList = []; 
let currentIndex = -1;
let guessedWords = new Set();  // This will store full word guesses

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
    guessedWords.clear(); // Clear previous game guesses
    attemptsLeft = 7;
    currentList = wordList;

    updateDisplay();
    messageElement.textContent = "";
    gameArea.style.display = "block";
    modeSelection.style.display = "none";
    bookCategories.style.display = "none";

    document.getElementById("hint").innerHTML = `Hint: The location has <strong>${currentWord.replace(/ /g, "").length}</strong> letters.`;
    suggestionsContainer.style.display = "none";
    suggestionsContainer.innerHTML = ""; // Clear suggestions
    currentIndex = -1; // Reset the suggestion index

    // Hide buttons
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("new-game-button").style.display = "none";

    // Show the blurred image of the location
    const blurredImageElement = document.createElement("img");
    blurredImageElement.src = fnafLocationImages[currentWord];
    blurredImageElement.style.filter = "blur(10px)"; // Add blur effect
    blurredImageElement.style.width = "100%"; // Make the image responsive
    document.getElementById("game-area").appendChild(blurredImageElement);

    // Clear guessed words display
    const guessedWordsElement = document.getElementById("guessedWordsElement");
    guessedWordsElement.innerHTML = "<p>Guesses: </p>";
}

// Update the game display
function updateDisplay() {
    // Update the display word (the word being guessed)
    displayWordElement.textContent = displayWord.join("");

    // Update the guessed letters (individual letter guesses)
    guessedLettersElement.textContent = Array.from(guessedLetters).join(", ").toUpperCase();

    // Update the guessed words (full word guesses)
    const guessedWordsList = Array.from(guessedWords).join(", ").toUpperCase();
    const guessedWordsElement = document.getElementById("guessedWordsElement");

    // Apply a class based on whether the last guess was correct or incorrect
    if (guessedWords.has(currentWord)) {
        guessedWordsElement.innerHTML = `<p class="correct-guess">Guesses: ${guessedWordsList}</p>`;
    } else {
        guessedWordsElement.innerHTML = `<p class="incorrect-guess">Guesses: ${guessedWordsList}</p>`;
    }

    // Update the remaining attempts
    remainingAttemptsElement.textContent = attemptsLeft;
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },  // Set the origin to be a bit lower on the screen
    });

    // You can also adjust the properties like particleCount, spread, and origin as needed.
}

function handleCorrectGuess() {
    displayWord = currentWord.split("");
    guessedWords.add(currentWord);

    // Reveal the word fully
    updateDisplay();

    messageElement.textContent = `Congratulations! You guessed the location: ${currentWord.toUpperCase()}`;
    endGame();

    // Trigger confetti animation
    triggerConfetti();

    // Reveal the location image
    const blurredImage = document.querySelector("#game-area img");
    if (blurredImage) {
        blurredImage.style.filter = "none"; // Remove blur
    }
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
        handleCorrectGuess();
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
    } else if (guess.length > 1) {
        if (guessedWords.has(guess)) {
            messageElement.textContent = `You already guessed the word '${guess.toUpperCase()}'. Try again!`;
            return;
        }

        guessedWords.add(guess);

        if (guess === currentWord) {
            handleCorrectGuess();
            return;
        } else {
            attemptsLeft--;
            messageElement.textContent = `Wrong guess! '${guess.toUpperCase()}' is not the word.`;
        }
    } else {
        messageElement.textContent = "Invalid input. Guess a single letter or the full word.";
    }

    updateDisplay();

    if (!displayWord.includes("_")) {
        handleCorrectGuess();
    } else if (attemptsLeft === 0) {
        messageElement.textContent = `Game over! The location was: ${currentWord.toUpperCase()}`;
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
    suggestionsContainer.innerHTML = filteredList
        .map(item => {
            const imageUrl = fnafImages[item] || "images/default.png"; // Use default image if not found
            return `
                <li class="suggestion">
                    <img src="${imageUrl}" alt="${item}" class="suggestion-img">
                    ${item}
                </li>`;
        })
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
    document.getElementById("new-game-button").style.display = "block";
}



// Event listeners
document.getElementById("choose-characters").addEventListener("click", () => startGame(characters));
document.getElementById("choose-books").addEventListener("click", () => {
    modeSelection.style.display = "none";
    bookCategories.style.display = "block";
});
document.getElementById("choose-locations").addEventListener("click", () => startGame(locations));

document.querySelectorAll("#book-categories button").forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.getAttribute("data-category");
        startGame(books[category]);
    });
});

document.getElementById("guess-button").addEventListener("click", handleGuess);
document.getElementById("guess-input").addEventListener("input", (e) => filterSuggestions(e.target.value));
// Restart game in the current category
document.getElementById("new-game-button").addEventListener("click", () => {
    startGame(currentList); // Restart the game with the same word list
    document.getElementById("new-game-button").style.display = "none"; // Hide the restart button
    document.getElementById("restart-button").style.display = "none"; // Hide the return to lobby button
});

// Return to the lobby
document.getElementById("restart-button").addEventListener("click", () => {
    gameArea.style.display = "none";
    modeSelection.style.display = "block";
    bookCategories.style.display = "none";
    document.getElementById("new-game-button").style.display = "none"; // Hide the restart button
    document.getElementById("restart-button").style.display = "none"; // Hide the return to lobby button
});
document.getElementById("new-game-button").addEventListener("click", () => {
    startGame(currentList); // Restart the game with the same word list
});
document.getElementById("restart-button").addEventListener("click", () => {
    gameArea.style.display = "none";
    modeSelection.style.display = "block";
    bookCategories.style.display = "none";
});

// Arrow key navigation for suggestions
document.getElementById("guess-input").addEventListener("keydown", (e) => {
    const suggestions = document.getElementById("suggestions").getElementsByClassName("suggestion");

    if (suggestions.length > 0) {
        if (e.key === "ArrowDown") {
            if (currentIndex < suggestions.length - 1) currentIndex++;
        } else if (e.key === "ArrowUp") {
            if (currentIndex > 0) currentIndex--;
        } else if (e.key === "Enter" && currentIndex >= 0) {
            document.getElementById("guess-input").value = suggestions[currentIndex].textContent;
            handleGuess();
            suggestionsContainer.style.display = "none";
        }

        Array.from(suggestions).forEach((item, index) => {
            item.classList.toggle("highlighted", index === currentIndex);
        });
    }
});

// Add highlighting styles
const style = document.createElement('style');
style.innerHTML = `
    .highlighted {
        background-color: #f39c12;
        color: #fff;
    }
`;
document.head.appendChild(style);