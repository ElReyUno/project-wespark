# WeSpark: A Full-Stack Learning & Opportunity Dashboard

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-v18.x-brightgreen?logo=node.js&style=flat-square" alt="Node.js v18.x" />
  <img src="https://img.shields.io/badge/Express-4.18.x-blue?logo=express&style=flat-square" alt="Express 4.18.x" />
  <img src="https://img.shields.io/badge/Angular-16.x-red?logo=angular&style=flat-square" alt="Angular 16.x" />
  <img src="https://img.shields.io/badge/TypeScript-5.1.x-blue?logo=typescript&style=flat-square" alt="TypeScript 5.1.x" />
  <img src="https://img.shields.io/badge/.NET%20MAUI-.NET%207-purple?logo=dotnet&style=flat-square" alt=".NET MAUI .NET 7" />
  <img src="https://img.shields.io/badge/C%23-C%23%2011-blueviolet?logo=csharp&style=flat-square" alt="C# 11" />
  <img src="https://img.shields.io/badge/JSON-Data%20Store-lightgrey?logo=json&style=flat-square" alt="JSON Data Store" />
  <img src="https://img.shields.io/badge/AWS-Cloud%20Ready-orange?logo=amazon-aws&style=flat-square" alt="AWS Cloud Ready" />
  <img src="https://img.shields.io/badge/Monorepo-Structure-informational?logo=github&style=flat-square" alt="Monorepo Structure" />
  <img src="https://img.shields.io/badge/CI%2FCD-Ready-success?logo=githubactions&style=flat-square" alt="CI/CD Ready" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
</p>

**Project Overview:**

WeSpark is a comprehensive full-stack application developed to demonstrate capabilities in modern software development practices and technologies. Conceived as a "Learning & Opportunity Dashboard," its primary goal is to showcase the creation of a system that collects, processes, and presents data relevant to identifying and fostering opportunities for growth and prosperity.

The system architecture comprises three interconnected components:

1.  **.NET MAUI Mobile Application:** A cross-platform mobile client enabling data input (e.g., ratings, textual feedback) related to learning experiences or opportunities.
2.  **Node.js & Express Backend API:** A RESTful API service responsible for receiving and persisting data submitted via the mobile application. Initial data storage is managed via a JSON file, with documented considerations for scalable cloud-based data solutions.
3.  **Angular Web Dashboard:** A single-page application (SPA) serving as an administrative and analytical interface. It allows for the visualization, searching, and interpretation of collected data, providing insights into potential areas for improvement or success.

This project highlights proficiency in full-stack development, modern mobile application architecture (as an evolution of Xamarin principles), and an understanding of cloud deployment strategies.

---

## 🚀 Technologies & Tool Stack

The WeSpark project leverages a robust and contemporary technology stack:

**1. Backend Service:**
    *   **Runtime/Language:** Node.js (`v18.x` or specified version) with JavaScript (ES6+)
    *   **Framework:** Express.js (`~4.18.x` or specified version)
    *   **Data Persistence (Initial):** Local JSON file, managed via Node.js `fs` module.
    *   **Package Manager:** npm (`v9.x` or specified version)

**2. Mobile Application:**
    *   **Framework:** .NET MAUI (Multi-platform App UI)
        *   *Based on:* .NET 7 (or specified .NET version)
    *   **Language:** C#
    *   **User Interface:** XAML
    *   **Key Architectural Concept:** Illustrates a contemporary approach to cross-platform native application development, succeeding Xamarin.Forms and enabling a single C# codebase for multiple targets.

**3. Web Dashboard (Frontend SPA):**
    *   **Framework:** Angular (`v16.x` or specified version)
    *   **Language:** TypeScript (`~5.1.x` or specified version)
    *   **Core Technologies:** HTML5, CSS3 (Optionally Angular Material `v16.x` for UI components)
    *   **Data Interaction:** Angular `HttpClientModule` for API communication.
    *   **Package Manager:** npm (`v9.x` or specified version), managed via Angular CLI.

**4. Version Control & Collaboration:**
    *   **System:** Git
    *   **Hosting Platform:** GitHub

**5. Development Environments:**
    *   **Primary IDEs:** Visual Studio Code (for Node.js/Angular, primarily within WSL Ubuntu `22.04 LTS` or specified version), Visual Studio 2022 (for .NET MAUI).
    *   **Operating System Flexibility:** The project supports development across Windows, macOS, and Linux, with this instance utilizing WSL for Linux-based development of backend/frontend components alongside Windows for .NET MAUI.

**6. Cloud Architecture Considerations (Backend Deployment Strategy):**
    The backend API is designed with scalability and cloud-native deployment in mind. A production deployment strategy would consider the following AWS services:
    *   **Compute Options:**
        *   **AWS Lambda:** For serverless function execution, suitable for event-driven API endpoints.
        *   **Amazon Elastic Beanstalk:** For managed deployment of the Node.js application.
        *   **Amazon EC2:** For direct virtual machine instances, offering granular control.
    *   **API Management:**
        *   **Amazon API Gateway:** To manage, secure, and expose API endpoints for Lambda, Beanstalk, or EC2.
    *   **Scalable Data Storage:**
        *   **Amazon DynamoDB:** A NoSQL database service for high-performance, scalable data storage.
        *   **Amazon S3:** For object storage, potentially for the JSON data file or associated assets.
        *   **Amazon RDS:** For relational database needs, if data complexity increases.
    *   **Security & Access Control:**
        *   **AWS IAM (Identity and Access Management):** For fine-grained control over access to AWS resources.
        *   **Amazon VPC & Security Groups:** For network isolation and traffic filtering.

---

## 📂 Project Structure (Monorepo)

The project is organized as a monorepo for streamlined management:

```
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
*(Sub-directories will contain their own `node_modules/` or `bin/obj/` folders, which are typically gitignored.)*

---

## ⚙️ Setup and Execution

Detailed setup and execution instructions for each component are available in their respective README files:
*   [`backend/README.md`](./backend/README.md)
*   [`mobile-app/README.md`](./mobile-app/README.md)
*   [`web-dashboard/README.md`](./web-dashboard/README.md)

**General Prerequisites:**
*   Git
*   Node.js & npm (refer to versions in "Technologies & Tool Stack")
*   .NET SDK (refer to .NET MAUI version)
*   Angular CLI (`npm install -g @angular/cli@<version>`)
*   Relevant IDEs (Visual Studio Code, Visual Studio 2022)

**Brief Execution Overview:**
1.  **Backend API:** Navigate to `backend/`, run `npm install`, then `npm start`. Typically available at `http://192.168.0.152:3000`.
2.  **Mobile App:** Open `mobile-app/WeSparkApp/WeSparkApp.csproj` in Visual Studio. Ensure .NET MAUI workloads are installed. Configure the API endpoint within the app to point to the running backend. Build and deploy to the desired target (emulator/device).
3.  **Web Dashboard:** Navigate to `web-dashboard/`, run `npm install`, then `ng serve`. Typically available at `http://localhost:4200`. Ensure the Angular service is configured to use the backend API URL.

---

## 🔧 API Configuration

The WeSpark application components communicate via REST API calls. Proper configuration is essential for development and deployment.

**Current Configuration:**
- Backend API: `http://192.168.0.152:3000`
- CORS enabled for Angular development server
- Centralized configuration files for easy updates

**Key Configuration Files:**
- `web-dashboard/src/environments/environment.ts` - Angular API URL
- `mobile-app/WeSparkApp/Configuration/AppConfig.cs` - MAUI API settings
- `backend/src/server.js` - CORS and server configuration

**Quick Setup Script:**
```bash
# Update all API URLs across the project
./update-api-url.sh http://your-new-api-url:3000
```

For detailed configuration instructions, see [API-Configuration-Guide.md](API-Configuration-Guide.md).

---

## ✨ Alignment with Technical Proficiencies

The "WeSpark" project is designed to demonstrate practical application of skills relevant to full-stack development roles:

*   **Full-Stack Development:** Exhibits the capacity to design, develop, and integrate components across the mobile client, backend API, and web frontend.
*   **Technology Proficiency:** Directly employs **Node.js, JavaScript, Angular, HTML, CSS, C#, and .NET**.
*   **.NET MAUI for Cross-Platform Mobile:** Leverages .NET MAUI to showcase modern C#-based mobile development, illustrating an understanding of concepts evolving from the Xamarin ecosystem.
*   **Cloud Architecture Acumen (AWS):** Articulates a strategic approach to deploying the backend service on AWS, demonstrating familiarity with cloud services and architectures relevant to scalable solutions.
*   **Development Tools & Practices:** Utilizes industry-standard tools such as **Git, Visual Studio, and VS Code**, and follows common development workflows within varied operating system environments (Linux via WSL, Windows).
*   **Data Handling & UI:** Implements features like data submission, storage, retrieval, and client-side search functionality within the web dashboard, showcasing practical application development.

---

## 💡 Potential Future Development

While the current version serves as a comprehensive demonstration, potential areas for future enhancement include:
*   Implementation of user authentication and authorization.
*   Advanced data visualization features in the Angular dashboard (e.g., dynamic charts, reporting).
*   Transitioning backend data storage to a cloud database solution (e.g., DynamoDB).
*   Full CI/CD pipeline setup for automated testing and deployment.
*   Live deployment of the backend API and frontend dashboard to cloud platforms.

---

## License

[LICENSE](LICENSE)

---

This README is intended to provide a clear and concise overview of the WeSpark project, its technical underpinnings, and its relevance to demonstrating key software development competencies.

---
