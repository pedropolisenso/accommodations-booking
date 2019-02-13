#!/usr/bin/env bash

echo "===================================================="
echo "Installing node dependences"
echo "===================================================="
npm install

# Install webpack global
echo "===================================================="
echo "Installing webpack global..."
echo "===================================================="
npm install webpack -g

# Iniciando config do Docker
echo "===================================================="
echo "Use password root to Docker configuration"
echo "===================================================="
sudo docker pull mongo

mkdir data

# Roda o container de mongo
sudo docker run -p 27017:27017 -v $(pwd)/data:/data/db -d mongo 
echo "===================================================="
echo "Mongo DB Up o//"
echo "===================================================="

echo "===================================================="
echo "Building application"
echo "===================================================="
npm run build

echo "===================================================="
echo "Starting application"
echo "===================================================="
npm run start

echo "App running in http://localhost:4200"