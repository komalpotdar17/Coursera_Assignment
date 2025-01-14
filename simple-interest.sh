#!/bin/bash
echo "Enter principal amount:"
read P
echo "Enter rate of interest:"
read R
echo "Enter time in years:"
read T

SI=$(echo "$P * $R * $T / 100" | bc)
echo "Simple Interest: $SI"
