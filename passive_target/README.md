# Passive Target

The Passive Target is a simple, cost-effective target module for hit detection. It signals the main system when a hit is detected, without advanced tracking capabilities.

## Features
- **Hit Detection**: Detects hits using piezo sensors.
- **Mesh Network Communication**: Sends hit signals to the main system via MQTT.

## Setup Instructions
1. Connect an ESP32 to the piezo sensor.
2. Flash the firmware from `firmware/passive_target.bin`.

## Usage
```bash
python3 source/main.py
```
## Testing

Run tests to ensure hit detection works as expected.