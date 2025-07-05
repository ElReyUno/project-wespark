#!/bin/bash

# WeSpark API URL Update Script
# This script updates the API URL across all configuration files

if [ $# -eq 0 ]; then
    echo "Usage: $0 <new-api-url>"
    echo "Example: $0 http://192.168.1.100:3000"
    echo "Example: $0 https://api.wespark.com"
    exit 1
fi

NEW_URL="$1"
echo "Updating API URLs to: $NEW_URL"

# Remove trailing slash if present
NEW_URL=$(echo "$NEW_URL" | sed 's/\/$//')

# Update Angular environment files
echo "Updating Angular environment files..."
sed -i "s|apiUrl: '[^']*'|apiUrl: '$NEW_URL'|g" web-dashboard/src/environments/environment.ts
sed -i "s|apiUrl: '[^']*'|apiUrl: '$NEW_URL'|g" web-dashboard/src/environments/environment.prod.ts

# Update .NET MAUI configuration
echo "Updating .NET MAUI configuration..."
sed -i "s|ApiBaseUrl = \"[^\"]*\"|ApiBaseUrl = \"$NEW_URL\"|g" mobile-app/WeSparkApp/Configuration/AppConfig.cs

# Extract host and port for CORS configuration
if [[ $NEW_URL =~ ^https?://([^:/]+)(:[0-9]+)?$ ]]; then
    HOST="${BASH_REMATCH[1]}"
    PORT="${BASH_REMATCH[2]}"
    
    # Update CORS origins in backend
    echo "Updating backend CORS configuration..."
    # Note: This is a simple replacement - manual verification recommended
    echo "Please manually update CORS origins in backend/src/server.js if needed"
    echo "Add: http://$HOST:4200 to the origins array"
fi

echo "API URL update complete!"
echo ""
echo "Updated files:"
echo "  - web-dashboard/src/environments/environment.ts"
echo "  - web-dashboard/src/environments/environment.prod.ts"
echo "  - mobile-app/WeSparkApp/Configuration/AppConfig.cs"
echo ""
echo "Please verify the changes and restart your development servers."
