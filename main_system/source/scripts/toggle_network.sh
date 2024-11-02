#!/bin/bash
# Usage: ./toggle_network.sh <mode>
# mode kann 'wifi' oder 'mesh' sein

CONFIG_PATH="/var/www/TactSim/config/connection_mode.conf"

if [ "$1" == "wifi" ]; then
    echo "Switching to WiFi mode..."
    sudo ifconfig wlan0 down
    # Hier kann die gespeicherte SSID und das Passwort verwendet werden
    sudo ifconfig wlan0 up
    sudo iwconfig wlan0 essid "GESPEICHERTE_SSID" key "GESPEICHERTES_PASSWORT"
    echo "wifi" > "$CONFIG_PATH"
elif [ "$1" == "mesh" ]; then
    echo "Switching to Mesh network mode..."
    sudo ifconfig wlan0 down
    # Mesh-Netzwerk Konfiguration (Details hier hinzufügen)
    sudo ifconfig wlan0 up
    echo "mesh" > "$CONFIG_PATH"
else
    echo "Ungültiger Modus. Verwenden Sie 'wifi' oder 'mesh'."
    exit 1
fi
