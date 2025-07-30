#!/bin/bash

echo "🚀 Starting Module Federation Demo"
echo "================================="

# Check if we're in the right directory
if [ ! -d "provider-app" ] || [ ! -d "consumer-app" ]; then
    echo "❌ Please run this script from the module-federation-simulation directory"
    exit 1
fi

echo ""
echo "🔥 Starting Provider App (Port 3001)..."

# Start provider app in background
cd provider-app
npm start &
PROVIDER_PID=$!

echo "Provider App started with PID: $PROVIDER_PID"
echo ""
echo "⏳ Waiting 5 seconds for Provider App to fully start..."
sleep 5

echo ""
echo "🎯 Starting Consumer App (Port 3002)..."

# Start consumer app
cd ../consumer-app
npm start &
CONSUMER_PID=$!

echo "Consumer App started with PID: $CONSUMER_PID"
echo ""
echo "✅ Both applications are starting!"
echo ""
echo "🌐 URLs:"
echo "   Provider App:  http://localhost:3001"
echo "   Consumer App:  http://localhost:3002"
echo ""
echo "💡 To stop both applications, press Ctrl+C"

# Wait for any process to exit
wait
