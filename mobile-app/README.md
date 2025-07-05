# WeSpark Mobile App (.NET MAUI)

## Overview
The WeSpark Mobile App is a cross-platform application built with .NET MAUI, serving as the primary client for collecting user feedback and opportunity data. It enables users to submit ratings and textual feedback, which are sent to the WeSpark backend API for storage and analysis. The app demonstrates modern C# mobile development, leveraging a single codebase for Android, iOS, Windows, and macOS.

---

## Features
- Cross-platform support: Android, iOS, Windows, macOS
- Modern, responsive UI with XAML
- Submit ratings and textual feedback
- API integration with the WeSpark backend
- Configurable API endpoint
- Clean, maintainable MVVM architecture

---

## Technologies Used
- **.NET MAUI** (Multi-platform App UI)
- **.NET v8.0.116**
- **C#**
- **XAML** (for UI)
- **MVVM** (Model-View-ViewModel) pattern
- **Visual Studio 2022** (recommended IDE)

---

## Project Structure
```text
mobile-app/
├── WeSparkApp/           # Main MAUI project source
│   ├── ...               # App source files (Views, ViewModels, Models, etc.)
├── README.md             # This file
```

---

## Setup & Usage

### Prerequisites
- Windows, macOS, or Linux (for development)
- [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) with .NET MAUI workload installed
- .NET 7 SDK or later
- Access to the WeSpark backend API (running locally or remotely)

### Getting Started
1. Open `mobile-app/WeSparkApp/WeSparkApp.csproj` in Visual Studio 2022.
2. Restore NuGet packages if prompted.
3. Configure the backend API endpoint in the app settings or code (see below).
4. Select your target platform (Android/iOS/Windows/macOS) and build/deploy to emulator or device.

### Configuring the API Endpoint
- Locate the API endpoint configuration in the app (typically in a constants/settings file or service class).
- Set the URL to match your running backend API (e.g., `http://192.168.0.152:3000` for local development).

---

## Development
- Follows MVVM architecture for maintainability and testability.
- UI is defined in XAML, with logic in C# ViewModels.
- Supports hot reload for rapid UI development.
- Contributions should follow .NET and MAUI best practices.

---

## Deployment
- The app can be deployed to Android and iOS devices/emulators, as well as Windows/macOS desktops.
- For production, update the API endpoint and app settings as needed.

---

## Testing
- Manual testing can be performed on emulators or physical devices.
- Automated UI and unit tests can be added (not included by default).

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes. For major changes, open an issue to discuss your proposal first.

---

## License
This project is licensed under the terms of the [MIT License](../LICENSE).

---

## Contact
For questions or support, please open an issue in the main repository.
