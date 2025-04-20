#!/bin/bash
echo "Running frontend tests..."
npm test --prefix ./src -- --coverage --watchAll=false

echo "Running backend tests..."
npm test --prefix ./backend -- --coverage --runInBand
