#!/bin/bash
# Scannt verfügbare WLAN-Netzwerke und gibt nur die SSIDs aus

sudo iwlist wlan0 scan | grep 'ESSID' | awk -F':' '{print $2}' | sed 's/"//g'
