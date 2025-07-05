# .NET MAUI Development on Linux/WSL

## Issue Resolution: "ContentPage could not be found"

### Problem
When developing .NET MAUI applications on Linux/WSL, you may encounter the error:
```
The type or namespace name 'ContentPage' could not be found (are you missing a using directive or an assembly reference?)CS0246
```

### Root Cause
- MAUI projects target multiple platforms (Android, iOS, macOS, Windows)
- On Linux, only Android development is supported
- The project needs proper package restoration and framework targeting

### Solution

1. **Update Target Frameworks** (already done in `WeSparkApp.csproj`):
   ```xml
   <TargetFrameworks Condition="$([MSBuild]::IsOSPlatform('linux'))">net8.0-android</TargetFrameworks>
   <TargetFrameworks Condition="$([MSBuild]::IsOSPlatform('windows'))">net8.0-android;net8.0-ios;net8.0-maccatalyst;net8.0-windows10.0.19041.0</TargetFrameworks>
   ```

2. **Restore Packages**:
   ```bash
   cd mobile-app/WeSparkApp
   dotnet restore
   ```

3. **Verify MAUI Workload**:
   ```bash
   dotnet workload list
   # Should show: maui-android
   ```

### Development Workflow

**On Linux/WSL:**
- ✅ Code editing and IntelliSense
- ✅ Package management
- ✅ API development and testing
- ❌ Full Android builds (requires Android SDK)
- ❌ iOS/macOS development

**On Windows:**
- ✅ Full MAUI development
- ✅ Android, iOS, Windows builds
- ✅ Emulator/device testing

### Recommended Setup

1. **Primary Development**: Use Windows with Visual Studio 2022
2. **Backend Development**: Use Linux/WSL for Node.js/Express
3. **Code Synchronization**: Use Git to sync between environments

### Current Status

✅ **Resolved**: ContentPage and other MAUI types are now recognized  
✅ **IntelliSense**: Working properly after `dotnet restore`  
✅ **Configuration**: Centralized API settings in `AppConfig.cs`  
✅ **Code Structure**: Proper async/await patterns for HTTP calls  

The code is ready for development and can be built/deployed on Windows systems.
