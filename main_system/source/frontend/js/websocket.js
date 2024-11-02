let socket;

function initializeWebSocket() {
  // Verwende die WebSocket-Adresse des Main Systems (z.B. für Video-Feed)
  socket = new WebSocket('ws://your-websocket-server:port');

  socket.onopen = () => {
    console.log('WebSocket connected');
    // Hier könnte man Initialisierungsnachrichten senden
  };

  socket.onmessage = (event) => {
    console.log('WebSocket message received:', event.data);
    // Verarbeitung der eingehenden Nachricht, z.B. Video-Feed-Handling
    updateLiveFeed(event.data);
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket closed');
    // Optional: Logik für automatischen Reconnect
  };
}

function updateLiveFeed(data) {
  // Logik, um den Live-Feed im UI zu aktualisieren
  const liveFeedElement = document.getElementById('liveFeed');
  if (liveFeedElement) {
    liveFeedElement.src = data; // Beispiel für das Update eines Video-Elements
  }
}

export { initializeWebSocket };
