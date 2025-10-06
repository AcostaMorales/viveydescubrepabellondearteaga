#!/usr/bin/env bash
# exit on error
set -o errexit

echo "Installing dependencies..."
npm ci

echo "Building the app..."
npm run build

echo "Build completed successfully!"
ls -la build/