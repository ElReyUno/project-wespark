# WeSpark API Configuration Guide

This document outlines how API URLs are configured across all components of the WeSpark application.

## Current Configuration

The application is currently configured to use the local development IP address: **192.168.0.152:3000**

## Backend (Node.js/Express)

**File:** `/backend/src/server.js`
- Server listens on: `0.0.0.0:3000` (all interfaces)
- CORS configured for: `http://localhost:4200`, `http://192.168.0.152:4200`
- Available endpoints:
  - GET `/` - Health check
  - GET/POST `/api/feedback` - Feedback operations
  - GET/POST `/api/clicks` - Click tracking

## Angular Web Dashboard

**Environment Files:**
- **Development:** `/web-dashboard/src/environments/environment.ts`
  ```typescript
  export const environment = {
    production: false,
    apiUrl: 'http://192.168.0.152:3000'
  };
  ```

- **Production:** `/web-dashboard/src/environments/environment.prod.ts`
  ```typescript
  export const environment = {
    production: true,
    apiUrl: 'http://192.168.0.152:3000'  // Update for production
  };
  ```

**Build Configuration:** `/web-dashboard/angular.json`
- Production builds automatically replace environment.ts with environment.prod.ts
- Environment accessed via: `environment.apiUrl`

**Service Usage:** `/web-dashboard/src/app/feedback.service.ts`
- Uses `environment.apiUrl` for all HTTP requests

## .NET MAUI Mobile App

**Configuration File:** `/mobile-app/WeSparkApp/Configuration/AppConfig.cs`
```csharp
public static class AppConfig
{
    public const string ApiBaseUrl = "http://192.168.0.152:3000";
    public const string FeedbackEndpoint = "/api/feedback";
    public const string ClicksEndpoint = "/api/clicks";
    
    public static string GetApiUrl(string endpoint)
    {
        return $"{ApiBaseUrl}{endpoint}";
    }
}
```

**Usage:** `/mobile-app/WeSparkApp/MainPage.xaml.cs`
- Uses `AppConfig.GetApiUrl()` for HTTP requests
- Configured with 30-second timeout

## How to Update API URLs

### For Development
1. **Find your machine's IP address:**
   ```bash
   # On Linux/WSL
   ip addr show | grep "inet " | grep -v 127.0.0.1
   
   # On Windows
   ipconfig | findstr "IPv4"
   ```

2. **Update the IP address in these files:**
   - `/web-dashboard/src/environments/environment.ts`
   - `/web-dashboard/src/environments/environment.prod.ts`
   - `/mobile-app/WeSparkApp/Configuration/AppConfig.cs`
   - `/backend/src/server.js` (CORS origins)

### For Production Deployment
1. **Backend:** Deploy to your hosting platform (AWS, Azure, etc.)
2. **Update environment files** with production URLs:
   - Angular: Update `environment.prod.ts`
   - MAUI: Update `AppConfig.cs`
3. **Build and deploy** frontend applications

## Network Access Requirements

### Mobile Device Testing
- Mobile device must be on the same network as development machine
- Windows Firewall may need to allow Node.js/port 3000
- Router must allow internal network communication

### CORS Configuration
The backend is configured to accept requests from:
- `http://localhost:4200` (Angular dev server)
- `http://192.168.0.152:4200` (Angular on network IP)
- All origins for mobile app requests (no CORS restriction)

## Testing the Configuration

### Test Backend Accessibility
```bash
# From development machine
curl http://192.168.0.152:3000/

# From mobile device or other machine
curl http://192.168.0.152:3000/
```

### Test Angular App
1. Start development server: `ng serve --host 0.0.0.0`
2. Access from other devices: `http://192.168.0.152:4200`

### Test MAUI App
1. Deploy to mobile device/emulator
2. Check debug output for HTTP request logs
3. Verify API calls in backend logs

## Troubleshooting

### Common Issues
1. **Connection refused:** Check if backend is running and firewall allows connections
2. **CORS errors:** Update CORS origins in `/backend/src/server.js`
3. **Wrong IP:** Update IP address in all configuration files
4. **Network issues:** Ensure all devices are on same network

### Debug Commands
```bash
# Check if backend is accessible
curl -v http://192.168.0.152:3000/

# Check CORS headers
curl -v -H "Origin: http://localhost:4200" http://192.168.0.152:3000/

# Test API endpoints
curl -X POST http://192.168.0.152:3000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"message":"test","rating":5}'
```
