<!-- PROJECT LOGO & BADGES -->
<p align="center">
  <img src="docs/assets/logo.png" alt="WeSpark Logo" width="120" height="120"/>
</p>
<p align="center">
  <b>WeSpark: A Full-Stack Learning & Opportunity Dashboard</b><br/>
  <a href="#">![Build Status](https://img.shields.io/badge/build-passing-brightgreen)</a>
  <a href="LICENSE">![License](https://img.shields.io/badge/license-MIT-blue.svg)</a>
</p>

---

# WeSpark: A Full-Stack Learning & Opportunity Dashboard

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Technologies & Tool Stack](#technologies--tool-stack)
- [Project Structure](#project-structure-monorepo)
- [Setup and Execution](#setup-and-execution)
- [Key Technical Competencies](#key-technical-competencies)
- [Potential Future Development](#potential-future-development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

WeSpark is a comprehensive full-stack application developed to demonstrate capabilities in modern software development practices and technologies. Conceived as a "Learning & Opportunity Dashboard," its primary goal is to showcase the creation of a system that collects, processes, and presents data relevant to identifying and fostering opportunities for growth and prosperity.

**System Architecture:**
1. **.NET MAUI Mobile Application:** Cross-platform mobile client for data input (ratings, feedback).
2. **Node.js & Express Backend API:** RESTful API for data persistence (initially via JSON file).
3. **Angular Web Dashboard:** SPA for admin/analytics, visualizing and interpreting collected data.

---

## Technologies & Tool Stack

<details>
<summary>Click to expand</summary>

- **Backend Service:**
    - **Runtime/Language:** Node.js (`v18.x` or specified version) with JavaScript (ES6+)
    - **Framework:** Express.js (`~4.18.x` or specified version)
    - **Data Persistence (Initial):** Local JSON file, managed via Node.js `fs` module.
    - **Package Manager:** npm (`v9.x` or specified version)

- **Mobile Application:**
    - **Framework:** .NET MAUI (Multi-platform App UI)
        - *Based on:* .NET 7 (or specified .NET version)
    - **Language:** C#
    - **User Interface:** XAML
    - **Key Architectural Concept:** Illustrates a contemporary approach to cross-platform native application development, succeeding Xamarin.Forms and enabling a single C# codebase for multiple targets.

- **Web Dashboard (Frontend SPA):**
    - **Framework:** Angular (`v16.x` or specified version)
    - **Language:** TypeScript (`~5.1.x` or specified version)
    - **Core Technologies:** HTML5, CSS3 (Optionally Angular Material `v16.x` for UI components)
    - **Data Interaction:** Angular `HttpClientModule` for API communication.
    - **Package Manager:** npm (`v9.x` or specified version), managed via Angular CLI.

- **Version Control & Collaboration:**
    - **System:** Git
    - **Hosting Platform:** GitHub

- **Design & Asset Creation:**
    - **Tool:** Canva ([canva.com](https://www.canva.com/)) – used for logo and graphic design

- **Command Line & Scripting:**
    - **Shell:** Bash – used for automation, scripting, and development workflows

- **Development Environments:**
    - **Primary IDEs:** Visual Studio Code (for Node.js/Angular, primarily within WSL Ubuntu `22.04 LTS` or specified version), Visual Studio 2022 (for .NET MAUI).
    - **Operating System Flexibility:** The project supports development across Windows, macOS, and Linux, with this instance utilizing WSL for Linux-based development of backend/frontend components alongside Windows for .NET MAUI.

- **Cloud Architecture Considerations (Backend Deployment Strategy):**
    - The backend API is designed with scalability and cloud-native deployment in mind. A production deployment strategy would consider the following AWS services:
        - **Compute Options:**
            - **AWS Lambda:** For serverless function execution, suitable for event-driven API endpoints.
            - **Amazon Elastic Beanstalk:** For managed deployment of the Node.js application.
            - **Amazon EC2:** For direct virtual machine instances, offering granular control.
        - **API Management:**
            - **Amazon API Gateway:** To manage, secure, and expose API endpoints for Lambda, Beanstalk, or EC2.
        - **Scalable Data Storage:**
            - **Amazon DynamoDB:** A NoSQL database service for high-performance, scalable data storage.
            - **Amazon S3:** For object storage, potentially for the JSON data file or associated assets.
            - **Amazon RDS:** For relational database needs, if data complexity increases.
        - **Security & Access Control:**
            - **AWS IAM (Identity and Access Management):** For fine-grained control over access to AWS resources.
            - **Amazon VPC & Security Groups:** For network isolation and traffic filtering.

</details>

---

## Project Structure (Monorepo)

```text
wespark/
├── backend/                  # Node.js Express API
│   ├── src/
│   │   └── server.js
│   ├── feedback.json         # (Example data store)
│   ├── package.json
│   └── README.md
├── mobile-app/               # .NET MAUI Application
│   ├── WeSparkApp/           # MAUI Project Source
│   │   └── ...
│   └── README.md
├── web-dashboard/            # Angular Web Application
│   ├── src/
│   │   └── ...
│   ├── angular.json
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md                 # Main project README (this file)
```

---

## Setup and Execution

<details>
<summary>General Prerequisites</summary>

- Git
- Node.js & npm (see stack above)
- .NET SDK (for .NET MAUI)
- Angular CLI (`npm install -g @angular/cli@<version>`)
- Visual Studio Code, Visual Studio 2022

</details>

<details>
<summary>Quick Start</summary>

1. **Backend API:**
    - `cd backend/`
    - `npm install`
    - `npm start` (runs at http://localhost:3000)
2. **Mobile App:**
    - Open `mobile-app/WeSparkApp/WeSparkApp.csproj` in Visual Studio
    - Ensure .NET MAUI workloads are installed
    - Configure API endpoint in app
    - Build & deploy to emulator/device
3. **Web Dashboard:**
    - `cd web-dashboard/`
    - `npm install`
    - `ng serve` (runs at http://localhost:4200)
    - Ensure Angular service uses backend API URL

</details>

---

## Key Technical Competencies

- **Full-Stack Development:** End-to-end design, development, and integration
- **Technology Proficiency:** Node.js, JavaScript, Angular, HTML, CSS, C#, .NET
- **.NET MAUI:** Modern C#-based mobile development
- **Cloud Architecture (AWS):** Strategic backend deployment
- **Development Tools:** Git, Visual Studio, VS Code, cross-OS workflows
- **Data Handling & UI:** Submission, storage, retrieval, and client-side search

---

## Potential Future Development

- User authentication and authorization
- Advanced data visualization (dynamic charts, reporting)
- Cloud database migration (e.g., DynamoDB)
- CI/CD pipeline for automated testing/deployment
- Live cloud deployment for backend/frontend

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the terms of the [MIT License](LICENSE).

---

## Contact

For questions, suggestions, or support, please open an issue or contact the maintainer via GitHub.

---
