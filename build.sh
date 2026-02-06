#!/bin/bash

# Portfolio Build and Deploy Script
# This script builds the React frontend and copies it to the root for GitHub Pages

echo "🚀 Building Portfolio..."

# Navigate to frontend directory
cd "$(dirname "$0")/frontend"

# Check if pnpm is available
if command -v pnpm &> /dev/null; then
    echo "📦 Installing dependencies with pnpm..."
    pnpm install
    echo "🔨 Building React app..."
    pnpm run build
elif command -v npm &> /dev/null; then
    echo "📦 Installing dependencies with npm..."
    npm install
    echo "🔨 Building React app..."
    npm run build
else
    echo "❌ Neither pnpm nor npm found. Please install Node.js and npm/pnpm."
    exit 1
fi

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful!"
    echo "📁 Built files are in frontend/dist/"
    echo ""
    echo "To deploy:"
    echo "1. Copy contents of frontend/dist/ to your web server"
    echo "2. Or push to GitHub and enable Pages with source 'GitHub Actions'"
    echo ""
    echo "For local preview:"
    echo "cd frontend && pnpm run preview"
else
    echo "❌ Build failed!"
    exit 1
fi