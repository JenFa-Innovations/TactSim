# Active Target

The Active Target module simulates an intelligent, interactive target in TACTSIM. Equipped with object detection, hit detection, and servo-controlled movement, it mimics realistic scenarios by detecting and tracking players.

## FeaturesS
- **Object Detection**: Uses a camera and TensorFlow Lite model for player detection.
- **Servo Control**: Automated servo rotation to track player movement.
- **Hit Detection**: Piezo sensors detect when the target is hit, signaling the main system.

## Setup Instructions
1. Ensure the Raspberry Pi Zero 2 W is connected to a camera and servo motor.
2. Install dependencies:
    ```bash
   pip install -r requirements.txt
    ```
## Usage

To start the Active Target:

```bash
python3 source/main.py
```
## Configuration

Edit config/active_target_config.yaml for:

    Detection thresholds
    Servo movement range
    Communication settings

## Testing

```bash
python3 -m unittest discover -s tests
```