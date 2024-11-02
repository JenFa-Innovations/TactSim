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

// Initialize Wi-Fi scan when Wi-Fi button is clicked
async function scanWiFiNetworks() {
  try {
      // Fetches the available Wi-Fi networks by calling the backend endpoint
      const response = await fetch('/scripts/scan_wifi.sh');
      const networks = await response.text();
      displayWiFiModal(networks.split('\n').filter(Boolean));
  } catch (error) {
      console.error("Error fetching Wi-Fi networks:", error);
  }
}

// Opens the Wi-Fi selection modal and displays available networks
function displayWiFiModal(networks) {
  const modal = document.getElementById('wifiModal');
  const networkList = document.getElementById('wifiList');
  networkList.innerHTML = '';

  // Populate modal with network options
  networks.forEach(network => {
      const networkOption = document.createElement('div');
      networkOption.classList.add('network-item');
      networkOption.textContent = network;
      networkOption.onclick = () => connectToNetwork(network);
      networkList.appendChild(networkOption);
  });

  // Show the modal
  modal.style.display = 'block';
}

// Attempt connection to a chosen Wi-Fi network
function connectToNetwork(network) {
  const password = prompt(`Enter password for ${network}:`);
  // Send network and password information to backend
  fetch(`/scripts/connect_wifi.sh?ssid=${network}&password=${password}`, { method: 'POST' })
      .then(response => {
          if (response.ok) {
              alert(`Connected to ${network}`);
          } else {
              alert(`Failed to connect to ${network}`);
          }
      })
      .catch(error => console.error("Connection error:", error));
}

// Closes the Wi-Fi modal
function closeWiFiModal() {
  document.getElementById('wifiModal').style.display = 'none';
}

