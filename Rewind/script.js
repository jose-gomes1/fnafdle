async function fetchUserIP() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=6e52f3303eb525'); // Replace with your API token
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return 'unknown';
    }
}



// Generate random stats based on user IP
function generateRandomStats(ip) {
    // Using the last few digits of the IP for randomness
    const randomSeed = parseInt(ip.split('.').pop()) || 0;

    // Random Nights Played
    const totalNights = (randomSeed % 10) + 10; // Range from 10 to 19

    // Random Characters
    const characters = ["Freddy Fazbear", "Bonnie", "Chica", "Foxy", "Golden Freddy", "Springtrap",
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
    "Paper Pals", "Candy Cadet", "El Chip", "Tilt", "Phone Guy", "Vanessa"];
    const randomCharacters = [];
    for (let i = 0; i < 3; i++) {
        const character = characters[Math.floor(Math.random() * characters.length)];
        if (!randomCharacters.includes(character)) {
            randomCharacters.push(character);
        }
    }

    // Random Game Mode (Night)
    const gameModes = ['Night 1', 'Night 2', 'Night 3', 'Night 4', 'Night 5', 'Night 6', 'Custom Night', 'Free Roam', 'Adventure'];
    const topGameMode = gameModes[Math.floor(Math.random() * gameModes.length)];

    // Random Jumpscares Survived
    const jumpscaresSurvived = (randomSeed % 10) + 5; // Range from 5 to 14

    return { totalNights, randomCharacters, topGameMode, jumpscaresSurvived };
}

// Store and display stats on the page based on IP
async function displayStats() {
    const ip = await fetchUserIP(); // Get the user's IP address
    const statsKey = `fnaf-stats-${ip}`; // Unique key based on IP

    let stats = localStorage.getItem(statsKey);

    if (!stats) {
        // If stats do not exist in localStorage, generate them
        stats = generateRandomStats(ip);
        // Save stats to localStorage
        localStorage.setItem(statsKey, JSON.stringify(stats));
    } else {
        // Parse stats from localStorage
        stats = JSON.parse(stats);
    }

    // Display the stats
    document.getElementById('total-nights').textContent = stats.totalNights;
    document.getElementById('top-game-mode').textContent = stats.topGameMode;
    document.getElementById('jumpscares-survived').textContent = stats.jumpscaresSurvived;

    const characterList = document.getElementById('character-list');
    stats.randomCharacters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.textContent = character;
        characterList.appendChild(listItem);
    });
}

// Call the displayStats function when the page loads
document.addEventListener('DOMContentLoaded', displayStats);