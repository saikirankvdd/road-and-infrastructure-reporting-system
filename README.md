# 🛣️ ROADWATCH
### *Road Infrastructure & Safety Intelligence & Reporting System*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v20%2B-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-06b6d4.svg)](https://tailwindcss.com/)
[![Railway](https://img.shields.io/badge/Deploy-Railway.app-purple.svg)](https://railway.app)

**RoadWatch** is a production-grade, desktop-first civic technology platform designed to streamline road infrastructure defect reporting, AI hazard risk assessment, and municipal authority routing.

---

## 🌟 Key Features

### 📍 1. Location Intelligence & Geocoding
- **HTML5 Sub-Meter GPS Geolocation**: Automatic user location detection via browser APIs.
- **Nominatim Reverse Geocoding**: Resolves exact street addresses, wards, and municipal circles (e.g., GHMC Uppal Circle, NHAI Warangal Corridor).
- **Interactive Leaflet Maps**: High-definition map preview with draggable geotag markers.

### 🤖 2. Gemini 3.8 Flash AI Road Analysis
- **Multimodal Visual & Text Inspection**: Uses Google Gemini 3.8 Flash (`@google/genai`) to evaluate photo evidence of potholes, asphalt cracks, damaged signs, and open trenches.
- **Automated Severity Scoring**: Classifies risks into *Critical*, *High*, *Medium*, or *Low*.
- **Authority Mapping**: Matches location coordinates to the exact responsible department (GHMC Roads, NHAI, R&B Telangana).
- **Contractor & Tender Correlation**: Links reported defects to active government road widening and maintenance tenders.

### ✉️ 3. Pre-filled Gmail & Email Dispatch
- **1-Click Gmail Web Launch**: Auto-generates a structured formal civic docket and launches a pre-filled Gmail Compose window (`https://mail.google.com/mail/...`) in a new tab.
- **Multi-Channel Dispatch**: Provides native `mailto:` links, direct SMTP delivery, and clipboard copy options.
- **48-Hour SLA Tracking**: Tracks municipal resolution status with official ticket dockets.

### 🔐 4. Dual-Mode Authentication & OTP Verification
- **Standard Account Login**: Login with Gmail/Username and Password.
- **New User Registration**: 6-digit Email Verification Code (OTP) generation with instant on-screen test toast and non-blocking background email dispatch.

---

## 🏗 System Architecture & Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend UI** | React 19, Tailwind CSS, Lucide React Icons, Canvas Confetti, Google Fonts (*Outfit* & *Inter*) |
| **Mapping & Geolocation** | Leaflet.js, OpenStreetMap, Nominatim API, HTML5 Geolocation API |
| **Backend API** | Node.js, Express, Vite 5 Dev Server Middleware |
| **AI Models** | Google Gemini 3.8 Flash (`@google/genai` SDK) |
| **Mail Dispatch** | Nodemailer (SMTP), Direct Gmail Web URL Generator |
| **Deployment** | Railway.app (`railway.json` / Nixpacks builder) |

---

## 🛠 Local Setup & Installation

### Prerequisites
- **Node.js**: v20.0.0 or higher
- **npm** or **bun**

### 1. Clone the Repository
```bash
git clone https://github.com/saikirankvdd/road-and-infrastructure-reporting-system.git
cd road-and-infrastructure-reporting-system
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory (optional for Gemini AI & SMTP):
```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🚀 Deploying to Railway.app

This project includes a ready-to-deploy [`railway.json`](railway.json) manifest.

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update RoadWatch project"
   git push -u origin main
   ```
2. Open **[Railway.app](https://railway.app)**.
3. Click **+ New Project** -> **Deploy from GitHub repo**.
4. Select `road-and-infrastructure-reporting-system`.
5. Railway will automatically execute `npm run build` and launch `npm start` on a public domain.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
