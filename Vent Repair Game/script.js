let repairTasks = 5;
let mangleDistance = 0;
let maxMangleDistance = 3;
let activeGameSisterLocation = false;

// Update the game status message
let messageElement = document.getElementById("message");
let tasksElement = document.getElementById("tasks");
let mangleStatusElement = document.getElementById("mangle-status");

function updateMessage(message) {
    messageElement.textContent = message;
}

function updateTasks() {
    tasksElement.textContent = `Repair tasks remaining: ${repairTasks}`;
}

function updateMangleStatus() {
    mangleStatusElement.textContent = `Mangle distance: ${mangleDistance}`;
}

function gameOver(message) {
    updateMessage(message);
    document.getElementById("repair-btn").disabled = true;
    document.getElementById("check-btn").disabled = true;
}

function repairAction() {
    if (Math.random() < 0.45) {  // 45% chance to successfully repair
        repairTasks--;
        updateTasks();
        updateMessage(`Repair successful! Tasks remaining: ${repairTasks}`);
    } else {
        mangleDistance++;
        updateMangleStatus();
        updateMessage("Repair failed! Mangle is getting closer.");
    }

    // Check if the game is over because all repairs are done
    if (repairTasks === 0) {
        gameOver("Congratulations! You successfully repaired all vents and survived!");
    }

    // Check if Mangle has reached the player
    if (mangleDistance >= maxMangleDistance) {
        gameOver("Mangle got to you! Game over.");
    }
}

function checkAction() {
    if (mangleDistance > 0) {
        mangleDistance--;
        updateMangleStatus();
        updateMessage("You checked the vents and saw Mangle. She has been pushed back.");
    } else {
        updateMessage("The vents are clear. No sign of Mangle.");
    }

    // Check if Mangle has reached the player
    if (mangleDistance >= maxMangleDistance) {
        gameOver("Mangle got to you! Game over.");
    }
}

function startGame() {
    activeGameSisterLocation = true;
    repairTasks = 5;
    mangleDistance = 0;
    updateTasks();
    updateMangleStatus();
    updateMessage("Repair the vents while keeping Mangle at bay!");
    document.getElementById("repair-btn").disabled = false;
    document.getElementById("check-btn").disabled = false;
}

// Start the game when the page loads
startGame();

document.getElementById("repair-btn").addEventListener("click", repairAction);
document.getElementById("check-btn").addEventListener("click", checkAction);
