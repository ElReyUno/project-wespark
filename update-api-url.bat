@echo off
REM WeSpark API URL Update Script for Windows
REM This script updates the API URL across all configuration files

if "%1"=="" (
    echo Usage: %0 ^<new-api-url^>
    echo Example: %0 http://192.168.1.100:3000
    echo Example: %0 https://api.wespark.com
    exit /b 1
)

set "NEW_URL=%1"
echo Updating API URLs to: %NEW_URL%

REM Remove trailing slash if present
if "%NEW_URL:~-1%"=="/" set "NEW_URL=%NEW_URL:~0,-1%"

echo Updating Angular environment files...
powershell -Command "(Get-Content 'web-dashboard\src\environments\environment.ts') -replace 'apiUrl: ''[^'']*''', 'apiUrl: ''%NEW_URL%''' | Set-Content 'web-dashboard\src\environments\environment.ts'"
powershell -Command "(Get-Content 'web-dashboard\src\environments\environment.prod.ts') -replace 'apiUrl: ''[^'']*''', 'apiUrl: ''%NEW_URL%''' | Set-Content 'web-dashboard\src\environments\environment.prod.ts'"

echo Updating .NET MAUI configuration...
powershell -Command "(Get-Content 'mobile-app\WeSparkApp\Configuration\AppConfig.cs') -replace 'ApiBaseUrl = \"\"[^\"\"]*\"\"', 'ApiBaseUrl = \"\"%NEW_URL%\"\"' | Set-Content 'mobile-app\WeSparkApp\Configuration\AppConfig.cs'"

echo API URL update complete!
echo.
echo Updated files:
echo   - web-dashboard\src\environments\environment.ts
echo   - web-dashboard\src\environments\environment.prod.ts
echo   - mobile-app\WeSparkApp\Configuration\AppConfig.cs
echo.
echo Please manually update CORS origins in backend\src\server.js if needed
echo and restart your development servers.

pause
