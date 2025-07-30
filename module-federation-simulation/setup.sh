#!/bin/bash

echo "🚀 Module Federation Simulation Setup"
echo "====================================="

# Check if we're in the right directory
if [ ! -d "provider-app" ] || [ ! -d "consumer-app" ]; then
    echo "❌ Please run this script from the module-federation-simulation directory"
    exit 1
fi

echo ""
echo "📦 Installing dependencies..."

echo "Installing Provider App dependencies..."
cd provider-app && npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Provider App dependencies"
    exit 1
fi

echo "Installing Consumer App dependencies..."
cd ../consumer-app && npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install Consumer App dependencies"
    exit 1
fi

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 How to run:"
echo "1. Terminal 1: cd provider-app && npm start"
echo "2. Terminal 2: cd consumer-app && npm start"
echo ""
echo "🌐 URLs:"
echo "   Provider App:  http://localhost:3001"
echo "   Consumer App:  http://localhost:3002"
