// FNaF character data
const fnafCharacters = [
    { name: "Freddy Fazbear", description: "The main man himself.", image: "../images/characters/freddy_fazbear.png" },
    { name: "Bonnie", description: "Axe Guitar goes hard.", image: "../images/characters/bonnie.png" },
    { name: "Chica", description: "The girl of the group.", image: "../images/characters/chica.png" },
    { name: "Foxy", description: "OMG, HE'S FAST.", image: "../images/characters/foxy.png" },
    { name: "Golden Freddy", description: "It's him.", image: "../images/characters/golden_freddy.png" },
    { name: "Springtrap", description: "He always comes back.", image: "../images/characters/springtrap.png" },
    { name: "Ballora", description: "Hot.", image: "../images/characters/ballora.png" },
    { name: "Circus Baby", description: "You like pretending? Ok. I'll pretend to like SL.", image: "../images/characters/circus_baby.png" },
    { name: "Ennard", description: "Clown Frankenstein uses man as skin suit.", image: "../images/characters/ennard.png" },
    { name: "Molten Freddy", description: "Why did Baby leave?", image: "../images/characters/molten_freddy.png" },
    { name: "Scrap Baby", description: "Stop calling Aftom 'Daddy'.", image: "../images/characters/scrap_baby.png" },
    { name: "Scraptrap", description: "Peanut.", image: "../images/characters/scraptrap.png" },
    { name: "Dark Springtrap", description: "Why do you have merch?", image: "../images/characters/dark_springtrap.png" },
    { name: "Lefty", description: "5 dollars? What a steal.", image: "../images/characters/lefty.png" },
    { name: "Rockstar Freddy", description: "5 coins.", image: "../images/characters/rockstar_freddy.png" },
    { name: "Rockstar Bonnie", description: "Go find your DAMN guitar yourself.", image: "../images/characters/rockstar_bonnie.png" },
    { name: "Rockstar Chica", description: "Scared of Wet Floor Signs.", image: "../images/characters/rockstar_chica.png" },
    { name: "Rockstar Foxy", description: "Me bird like you.", image: "../images/characters/rockstar_foxy.png" },
    { name: "Carnie", description: "Are you... Lefty?", image: "../images/characters/carnie.png" },
    { name: "Happy Frog", description: "Frog.", image: "../images/characters/happy_frog.png" },
    { name: "Mr. Hippo", description: "Here comes the 5 minute story.", image: "../images/characters/mr_hippo.png" },
    { name: "Orville Elephant", description: "Ok, man, go sit at a lake with Mr. Hippo.", image: "../images/characters/orville_elephant.png" },
    { name: "Nedd Bear", description: "Brick Bear.", image: "../images/characters/nedd_bear.png" },
    { name: "Pigpatch", description: "Insult. Banjo.mp3", image: "../images/characters/pigpatch.png" },
    { name: "Funtime Freddy", description: "The Coolest SL.", image: "../images/characters/funtime_freddy.png" },
    { name: "Funtime Foxy", description: "The show came to you.", image: "../images/characters/funtime_foxy.png" },
    { name: "Funtime Chica", description: "You have to buy her, she's not in SL.", image: "../images/characters/funtime_chica.png" },
    { name: "Nightmare", description: "GUYS, HE'S SHADOW FREDDY! OMG!", image: "../images/characters/nightmare.png" },
    { name: "Nightmare Fredbear", description: "What do you use the belly teeth for?", image: "../images/characters/nightmare_fredbear.png" },
    { name: "Nightmare Freddy", description: "I shall call you... Mini-me.", image: "../images/characters/nightmare_freddy.png" },
    { name: "Nightmare Bonnie", description: "That guy who breathes in the Mic.", image: "../images/characters/nightmare_bonnie.png" },
    { name: "Nightmare Chica", description: "The first night isn't usually that bad in any of the games.", image: "../images/characters/nightmare_chica.png" },
    { name: "Nightmare Foxy", description: "Still on the closet.", image: "../images/characters/nightmare_foxy.png" },
    { name: "Nightmare Mangle", description: "Shut up.", image: "../images/characters/nightmare_mangle.png" },
    { name: "Nightmare Balloon Boy", description: "Salad Fingers.", image: "../images/characters/nightmare_balloon_boy.png" },
    { name: "Phantom Freddy", description: "LEGLESS FREDDY!!!!!!", image: "../images/characters/phantom_freddy.png" },
    { name: "Phantom Chica", description: "Watermelon.", image: "../images/characters/phantom_chica.png" },
    { name: "Phantom Foxy", description: "Unscrew 2.", image: "../images/characters/phantom_foxy.png" },
    { name: "Phantom Balloon Boy", description: "'WHAT? I'M NOT DEAD?' - Everyone in night 2", image: "../images/characters/phantom_balloon_boy.png" },
    { name: "Phantom Puppet", description: "Watermelon but louder.", image: "../images/characters/phantom_puppet.png" },
    { name: "Phantom Mangle", description: "Watermelon but louder but fox.", image: "../images/characters/phantom_mangle.png" },
    { name: "Shadow Freddy", description: "Are you even important?", image: "../images/characters/shadow_freddy.png" },
    { name: "RWQFSFASXC", description: "I memorized his full name.", image: "../images/characters/rwqfsfasxc.png" },
    { name: "Helpy", description: "NOOOOOOOOOOOOOOOOOO, THE LITTLE GUY BROKE HIS BAAAAAAAAAACK.", image: "../images/characters/helpy.png" },
    { name: "Dee Dee", description: "I hate you.", image: "../images/characters/dee_dee.png" },
    { name: "XOR", description: "How unfortunate.", image: "../images/characters/xor.png" },
    { name: "Old Man Consequences", description: "Fish.", image: "../images/characters/old_man_consequences.png" },
    { name: "Vengeful Spirit", description: "Kinda egocentric.", image: "../images/characters/vengeful_spirit.png" },
    { name: "Toy Freddy", description: "Freddy but Gamer.", image: "../images/characters/toy_freddy.png" },
    { name: "Toy Chica", description: "The internet loves her.", image: "../images/characters/toy_chica.png" },
    { name: "Toy Bonnie", description: "Gay Rabbit.", image: "../images/characters/toy_bonnie.png" },
    { name: "Mangle", description: "MANGLE'S GENDER WAS CONFIRMED BYT SCOTT, IT'S 'YES'.", image: "../images/characters/mangle.png" },
    { name: "Balloon Boy", description: "Your battery is mine.", image: "../images/characters/balloon_boy.png" },
    { name: "Puppet", description: "Give gifts, give life.", image: "../images/characters/puppet.png" },
    { name: "JJ", description: "Be honest, you just remember she exists because of Fnaf World.", image: "../images/characters/jj.png" },
    { name: "Withered Freddy", description: "How do you have your face if I'm wearing it?", image: "../images/characters/withered_freddy.png" },
    { name: "Withered Bonnie", description: "Toilet.", image: "../images/characters/withered_bonnie.png" },
    { name: "Withered Chica", description: "I don't think she can carry her cupcake anymore.", image: "../images/characters/withered_chica.png" },
    { name: "Withered Foxy", description: "From camera shy to epileptic.", image: "../images/characters/withered_foxy.png" },
    { name: "Withered Golden Freddy", description: "Floating head.", image: "../images/characters/withered_golden_freddy.png" },
    { name: "Bidybab", description: "WHY ARE YOU SO STRONG?", image: "../images/characters/bidybab.png" },
    { name: "Electrobab", description: "Pathetic.", image: "../images/characters/electrobab.png" },
    { name: "Minireena", description: "You hate Night 4 as much as I.", image: "../images/characters/minireena.png" },
    { name: "Bon Bon", description: "Freddy, there's no body here.", image: "../images/characters/bon_bon.png" },
    { name: "Bonnet", description: "Click the nose.", image: "../images/characters/bonnet.png" },
    { name: "Yenndo", description: "IS THAT FUNTIME FREDBEAR?!", image: "../images/characters/yenndo.png" },
    { name: "Music Man", description: "Matpat's favorite.", image: "../images/characters/music_man.png" },
    { name: "Glamrock Freddy", description: "Papa Bear.", image: "../images/characters/glamrock_freddy.png" },
    { name: "Glamrock Chica", description: "Be careful with Speed.", image: "../images/characters/glamrock_chica.png" },
    { name: "Montgomery Gator", description: "Anger issues.", image: "../images/characters/monty.png" },
    { name: "Roxanne Wolf", description: "'I bet you don't even have friends.'", image: "../images/characters/roxy.png" },
    { name: "DJ Music Man", description: "The best Spider of the franchise.", image: "../images/characters/dj_music_man.png" },
    { name: "Wind-Up Music Man", description: "British people be like.", image: "../images/characters/wind_up_music_man.png" },
    { name: "Glitchtrap", description: "Remember Jeremy.", image: "../images/characters/glitchtrap.png" },
    { name: "Dreadbear", description: "Teeth.", image: "../images/characters/dreadbear.png" },
    { name: "Vanny", description: "Follower of Afton.", image: "../images/characters/vanny.png" },
    { name: "Helpi", description: "LET'S GO, HE'S THE GOAT.", image: "../images/characters/helpi.png" },
    { name: "Burntrap", description: "He's back... and, Hot Take: I like it.", image: "../images/characters/burntrap.png" },
    { name: "Tangle", description: "Blob.", image: "../images/characters/tangle.png" },
    { name: "Sun", description: "Keep the lights on.", image: "../images/characters/sun.png" },
    { name: "Moon", description: "See? That's why you should've kept the lights on.", image: "../images/characters/moon.png" },
    { name: "STAFF Bot", description: "Why are there so many of you?", image: "../images/characters/staff_bot.png" },
    { name: "Map Bot", description: "Take a map.", image: "../images/characters/map_bot.png" },
    { name: "Mask Bot", description: "Take a mask.", image: "../images/characters/mask_bot.png" },
    { name: "The Mimic", description: "'I'm Gregory.'", image: "../images/characters/mimic.png" },
    { name: "Shattered Roxy", description: "Stole your eyes, haha.", image: "../images/characters/shattered_roxy.png" },
    { name: "Shattered Monty", description: "No legs, no claws, no hope.", image: "../images/characters/shattered_monty.png" },
    { name: "Shattered Chica", description: "No beak.", image: "../images/characters/shattered_chica.png" },
    { name: "Glamrock Bonnie", description: "GUYS, HE'S REAL!", image: "../images/characters/glamrock_bonnie.png" },
    { name: "MXES", description: "Keep the Mimic hidden.", image: "../images/characters/mxes.png" },
    { name: "Ruined Chica", description: "Mold.", image: "../images/characters/ruined_chica.png" },
    { name: "Ruined Roxy", description: "Why are you friendly now?", image: "../images/characters/ruined_roxy.png" },
    { name: "Ruined Monty", description: "Dog Gator.", image: "../images/characters/ruined_monty.png" },
    { name: "Ruined DJ Music Man", description: "Matpat's favorite but ruined.", image: "../images/characters/ruined_dj_music_man.png" },
    { name: "Ruined Wind-Up Music Man", description: "Ruined England.", image: "../images/characters/ruined_wind_up_music_man.png" },
    { name: "Nightmare Staff Bot", description: "Why are you in the trailer? You're barely in the game.", image: "../images/characters/nightmare_staff_bot.png" },
    { name: "Jack-O-Chica", description: "Halloween Chicken.", image: "../images/characters/jack_o_chica.png" },
    { name: "Jack-O-Bonnie", description: "Halloween Rabbit.", image: "../images/characters/jack_o_bonnie.png" },
    { name: "Nightmarionne", description: "Died at 0.7 secodns again?", image: "../images/characters/nightmarionne.png" },
    { name: "Plushtrap", description: "He's an actual in universe merchandise.", image: "../images/characters/plushtrap.png" },
    { name: "Security Puppet", description: "You couldn't save her.", image: "../images/characters/security_puppet.png" },
    { name: "Captain Foxy", description: "Foxy but more YARG!", image: "../images/characters/captain_foxy.png" },
    { name: "Jack-O-Moon", description: "Moon but Halloween.", image: "../images/characters/jack_o_moon.png" },
    { name: "Eclipse", description: "A hybrid form of Sun and Moon.", image: "../images/characters/eclipse.png" },
    { name: "Ruined Freddy", description: "Prototype Freddy.", image: "../images/characters/ruined_freddy.png" },
    { name: "Springbonnie", description: "The suit used there.", image: "../images/characters/springbonnie.png" },
    { name: "Fredbear", description: "Chomp.", image: "../images/characters/fredbear.png" },
    { name: "Mystic Hippo", description: "I have a message for you.", image: "../images/characters/mystic_hippo.png" },
    { name: "Wet Floor Bot", description: "Rockstar Chica's worse enemy.", image: "../images/characters/wet_floor_bot.png" },
    { name: "Freddy Frostbear", description: "The 'cool' Freddy. (literally)", image: "../images/characters/freddy_frostbear.png" },
    { name: "8-Bit Baby", description: "Pixel Art.", image: "../images/characters/8_bit_baby.png" },
    { name: "Endo-01", description: "Daniel.", image: "../images/characters/endo_01.png" },
    { name: "Endo-02", description: "Cooler Daniel.", image: "../images/characters/endo_02.png" },
    { name: "Nightmare Endo", description: "Nightmare Daniel.", image: "../images/characters/nightmare_endo.png" },
    { name: "Glamrock Endo", description: "Glamrock Daniel.", image: "../images/characters/glamrock_endo.png" },
    { name: "Freddles", description: "The sons of Freddy.", image: "../images/characters/freddles.png" },
    { name: "Grimm Foxy", description: "Halloween Fox.", image: "../images/characters/grimm_foxy.png" },
    { name: "Lolbit", description: "She's so cool.", image: "../images/characters/lolbit.png" },
    { name: "Lemonade Clown", description: "Lemonade for everyone.", image: "../images/characters/lemonade_clown.png" },
    { name: "Fruit Punch Clown", description: "Fruit Punch for everyone.", image: "../images/characters/fruit_punch_clown.png" },
    { name: "Jackie", description: "THE MIMIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII-", image: "../images/characters/jackie.png" },
    { name: "Head Chef Bot", description: "Who let them cook?", image: "../images/characters/head_chef_bot.png" },
    { name: "Hand Unit", description: "Exotic Butters.", image: "../images/characters/hand_unit.png" },
    { name: "Mr Cupcake", description: "The deadliest robot in the movie.", image: "../images/characters/mr_cupcake.png" },
    { name: "Nightmare Cupcake", description: "Edgy Food.", image: "../images/characters/nightmare_cupcake.png" },
    { name: "Jack-O-Lantern", description: "Edgy Halloween Food.", image: "../images/characters/jack_o_lantern.png" },
    { name: "Dark Freddy", description: "That one Freddy you forgot.", image: "../images/characters/dark_freddy.png" },
    { name: "Neon Bonnie", description: "That one Bonnie you forgot.", image: "../images/characters/neon_bonnie.png" },
    { name: "Neon Chica", description: "That one Chica you forgot.", image: "../images/characters/neon_chica.png" },
    { name: "Burnt Foxy", description: "That one Foxy you forgot.", image: "../images/characters/burnt_foxy.png" },
    { name: "Shadow Mangle", description: "That other Fox you forgot.", image: "../images/characters/shadow_mangle.png" },
    { name: "Dark Foxy", description: "Why are there so many forgotteable foxes?", image: "../images/characters/dark_foxy.png" },
    { name: "Party Freddy", description: "Let's party.", image: "../images/characters/party_freddy.png" },
    { name: "Trash and the Gang", description: "They are in UCN and Withered Freddy isn't?", image: "../images/characters/pan_stan.png" },
    { name: "Paper Pals", description: "Who is moving them?", image: "../images/characters/paper_pals.png" },
    { name: "Candy Cadet", description: "STORY TIME.", image: "../images/characters/candy_cadet.png" },
    { name: "El Chip", description: "Chipper but mexican.", image: "../images/characters/el_chip.png" },
    { name: "Tilt", description: "Hand Puppet.", image: "../images/characters/tilt.png" },
    { name: "Phone Guy", description: "Mute Call.", image: "../images/characters/phone_guy.png" },
    { name: "Phone Dude", description: "Mutt Call but Cooler.", image: "../images/characters/phone_dude.png" },
    { name: "Gregory", description: "The annoying kid that destroys robots.", image: "../images/characters/gregory.png" },
    { name: "Vanessa", description: "White woman jumpscare.", image: "../images/characters/vanessa.png" },
    { name: "Michael Afton", description: "The other Purple Guy.", image: "../images/characters/michael_afton.png" },
    { name: "Cassie", description: "The Cooler child protagonist.", image: "../images/characters/cassie.png" },
    { name: "Jeremy Fitzgerald", description: "The bite of '87.", image: "../images/characters/jeremy_fitzgerald.png" },
    { name: "Elizabeth Afton", description: "Died because of Ice Cream.", image: "../images/characters/elizabeth_afton.png" },
    { name: "William Afton", description: "The man behind the slaughter.", image: "../images/characters/william_afton.png" },
    { name: "Crying Child", description: "I'll put you back together.", image: "../images/characters/crying_child.png" }        
];

// Global variables
let currentCharacter = null;
const descriptionElement = document.getElementById("description");
const guessInput = document.getElementById("guess-input");
const messageElement = document.getElementById("message");
const suggestionsContainer = document.getElementById("suggestions");
const restartButton = document.getElementById("restart-button");
const guessesList = document.getElementById("guesses-list"); // New container to display guesses

// Array to store guesses
let guesses = [];

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Function to randomly select a character
function selectRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * fnafCharacters.length);
    currentCharacter = fnafCharacters[randomIndex];
    descriptionElement.textContent = currentCharacter.description;
}

// Function to filter suggestions
function filterSuggestions(input) {
    const query = input.trim().toLowerCase();
    if (!query) {
        suggestionsContainer.style.display = "none";
        return;
    }

    const filteredList = fnafCharacters
        .filter(char => char.name.toLowerCase().includes(query))
        .map(char => char.name);

    suggestionsContainer.innerHTML = filteredList
        .map(name => {
            const char = fnafCharacters.find(c => c.name === name);
            return `
                <li class="suggestion">
                    <img src="${char.image}" alt="${name}">
                    ${name}
                </li>`;
        })
        .join("");

    suggestionsContainer.style.display = filteredList.length > 0 ? "block" : "none";

    // Add event listener to each suggestion for auto-submitting the guess
    document.querySelectorAll("#suggestions li").forEach(li => {
        li.addEventListener("click", () => {
            guessInput.value = li.textContent.trim();
            suggestionsContainer.style.display = "none";
            handleGuess();  // Automatically handle the guess when a suggestion is clicked
        });
    });
}

// Function to handle the guess
function handleGuess() {
    const guess = guessInput.value.trim().toLowerCase();

    // Add guess to the guesses array
    guesses.push(guess);

    // Display guesses in the list
    displayGuesses();

    if (guess === currentCharacter.name.toLowerCase()) {
        messageElement.textContent = `Correct! It's ${currentCharacter.name}.`;
        messageElement.style.color = "#4CAF50";
        restartButton.style.display = "block";
        triggerConfetti();
    } else {
        messageElement.textContent = "Wrong guess! Try again.";
        messageElement.style.color = "#F44336";
    }
}

// Function to display the guesses
function displayGuesses() {
    guessesList.innerHTML = guesses.join(", ");
}

// Function to reset the game
function resetGame() {
    messageElement.textContent = "";
    guessInput.value = "";
    suggestionsContainer.style.display = "none";
    guesses = []; // Reset the guesses array
    displayGuesses(); // Update the guesses display
    selectRandomCharacter();
}

// Event listeners
guessInput.addEventListener("input", () => filterSuggestions(guessInput.value));
document.getElementById("guess-button").addEventListener("click", handleGuess);
restartButton.addEventListener("click", resetGame);

// Initialize the game
selectRandomCharacter();
