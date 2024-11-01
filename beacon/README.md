# Beacon

The Beacon module serves as a personal tracking device for players. It includes a buzzer and LED for hit notification, and communicates player location within the TACTSIM system.

## Features
- **Player Location Tracking**: Provides relative positioning within the mesh.
- **Hit Notification**: LED and buzzer activate when player is "hit" by an Active Target.

## Setup Instructions
1. Connect the ESP32 to an LED and buzzer.
2. Flash `firmware/beacon.bin` onto the ESP32.

## Usage
When activated, the beacon will start tracking player location and display hit notifications.