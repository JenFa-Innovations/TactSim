let timerInterval;
let seconds = 0;

// Timer functions
function startTimer() {
  seconds = 0;
  document.getElementById("liveTimer").textContent = formatTime(seconds);
  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById("liveTimer").textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function formatTime(sec) {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startGame() {
  const mode = document.getElementById("mode").value;
  const difficulty = document.getElementById("difficulty").value;
  const singlePlayerName = document.getElementById("playerName").value;

  if (mode === "coop" && playerList.length === 0) {
    alert("Please add at least one player.");
    return;
  }
  if (mode === "single" && !singlePlayerName) {
    alert("Please enter a player name for Single Mode.");
    return;
  }
  alert(`Game started for ${mode === "coop" ? playerList.map(p => p.name).join(", ") : singlePlayerName} in ${mode} mode on ${difficulty} difficulty.`);
  startTimer();
}
