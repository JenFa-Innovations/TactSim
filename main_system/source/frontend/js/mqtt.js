import mqtt from 'mqtt';

let client;
let topics;

function initializeMQTT() {
  fetch('/config/mqtt_topics.json')
    .then(response => response.json())
    .then(config => {
      topics = config;
      const brokerUrl = 'ws://localhost:port'; // Setze hier die MQTT Broker URL ein
      client = mqtt.connect(brokerUrl);

      client.on('connect', () => {
        console.log('Connected to MQTT broker');

        // Topics abonnieren
        client.subscribe(topics.active_target.location);
        client.subscribe(topics.active_target.status);
        client.subscribe(topics.passive_target.location);
        client.subscribe(topics.passive_target.status);
        client.subscribe(topics.beacon.location);
        client.subscribe(topics.main_system.software_update);
        console.log('Subscribed to necessary topics');
      });

      client.on('message', (topic, message) => {
        console.log(`Received message: ${message.toString()} on topic: ${topic}`);
        // Logik basierend auf empfangenem Topic
        handleIncomingMessage(topic, message.toString());
      });
    })
    .catch(error => console.error('Error loading MQTT topics:', error));
}

function handleIncomingMessage(topic, message) {
  if (topic === topics.active_target.location) {
    console.log("Active Target Location:", message);
    // Beispiel: Update die Location im Dashboard
  } else if (topic === topics.main_system.software_update) {
    console.log("Software Update received:", message);
    // Beispiel: Trigger Software Update auf dem Dashboard
  }
  // Weitere Topics je nach Bedarf handhaben
}

export { initializeMQTT };
