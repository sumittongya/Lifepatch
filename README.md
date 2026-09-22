# 🩹 LIFE PATCH — Rural & Underserved Public Healthcare Platform

> **Smart India Hackathon 2026 Proof of Concept (SIH Problem Statement SIH26133)**  
> *One Continuous, Consent-Controlled Longitudinal Health Record for Rural Citizens, ASHA Workers, Primary Health Centres, and Referral Hospitals.*

---

## 🌟 Executive Summary

**LIFE PATCH** is an enterprise-grade, offline-first digital healthcare continuity platform engineered specifically for rural and underserved healthcare ecosystems in India. It unites citizens, frontline Accredited Social Health Activists (**ASHA**), **Primary Health Centres (PHCs)**, and secondary/tertiary **District Referral Hospitals** into an integrated, longitudinal electronic health record (EHR) ecosystem.

Built with **zero external cloud server dependencies**, LIFE PATCH operates directly within the browser using a high-performance **IndexedDB engine (17 data stores)**, **Native Web Speech API** recognition in regional Indian languages (Hindi, Telugu, English), **PWA Service Worker offline caching**, and strict alignment with the **Ayushman Bharat Digital Mission (ABDM)** standards.

---

## 🚀 How to Run the Application Locally

Because modern web browsers enforce Cross-Origin Resource Sharing (CORS) security policies on native ES Modules (`<script type="module">`), the application must be served over a local HTTP server rather than loaded via raw `file:///` URLs.

### Option 1: Modern Vite Dev Server (Recommended)
```bash
# 1. Open terminal and navigate to the project directory
cd /path/to/lifepatch-main/sih

# 2. Install dependencies (Vite, Lucide, Chart.js)
npm install

# 3. Start high-speed local development server
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

### Option 2: Built-in Python 3 Server (Instant — No npm Required)
```bash
# Navigate to the sih folder
cd /path/to/lifepatch-main/sih

# Start Python HTTP server on port 3000
python3 -m http.server 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

### Option 3: Node `npx serve` (Zero Global Installs)
```bash
cd /path/to/lifepatch-main/sih
npx serve -l 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 👥 Demo Personas & Fast 1-Click Access

The application includes rich synthetic Indian clinical seed data. You can instantly switch roles using the **"⇄ Role"** button in the header or via `login.html`:

| Persona | Name | Role & Sub-Centre | Key Responsibilities |
| :--- | :--- | :--- | :--- |
| **👤 Patient** | **Lakshmi Devi** *(52y, F)* | Citizen • Kondapur Village | Voice symptom logging, ABHA card, longitudinal timeline, appointments, 108 emergency SOS. |
| **👨‍⚕️ Doctor** | **Dr. Ananya Rao** | Medical Officer • PHC Kondapur | OPD priority queue triage, teleconsultation, grounded AI SOAP summaries, e-prescriptions, hospital referrals. |
| **👩‍⚕️ ASHA Worker** | **Sunita Bai** | Community Health Worker • Sector 3 | Field vitals capture (BP, Sugar, SpO2), assisted citizen login with verbal consent, offline queue & sync. |

---

## 🔄 Step-by-Step Functionalities & User Flows

### Flow 1: Patient Voice Symptom Logging & Longitudinal Timeline
1. Open the **Patient Portal** (`/patient/dashboard.html`).
2. Click **"Voice Symptom Assistant"** (`/patient/voice.html`).
3. Select your preferred dialect (**Hindi**, **Telugu**, or **English**) and tap the microphone icon (or select a quick sample prompt).
4. Review the auto-transcribed text, choose severity and duration, and click **"Save to Longitudinal EHR"**.
5. Navigate to **"Medical Records"** (`/patient/records.html`) to see the symptom recorded with real-time timestamps in the longitudinal timeline.
6. Click **"Digitise Paper Record (OCR)"** to scan an old hospital slip and convert it into a structured electronic card.

---

### Flow 2: Doctor Queue Triage, AI SOAP Notes & e-Prescriptions
1. Switch to the **Doctor Workspace** (`/doctor/dashboard.html`).
2. Notice the real-time **Queue Triage Distribution Doughnut Chart** and **Weekly OPD Load Bar Chart**.
3. In the **OPD Priority Queue Table**, observe the newly reported symptom. Override the triage priority to **"Emergency"** or **"High"**.
4. Click **"Chart"** to open the patient's comprehensive EHR (`/doctor/patient-record.html`):
   - View the **Grounded AI Clinical Assistant Summary** with flagged chronic conditions and review areas.
   - Inspect the interactive **Vitals Trend Chart** (Systolic BP vs. Blood Sugar history).
5. Click **"Consult"** (`/doctor/consultation.html`) to enter the encrypted virtual teleconsultation room. Use **"Auto SOAP"** or **"Voice Dictate"** to record clinical assessment notes.
6. Click **"Prescribe"** (`/doctor/prescriptions.html`) to issue an e-prescription. Notice the **automatic drug-allergy safety alert** (e.g. Penicillin allergy warning) and click **"Print Official Rx Slip"** to generate an official hospital letterhead prescription.
7. Click **"Referrals"** (`/doctor/referrals.html`) to transfer the patient to District Hospital Cardiology with complete longitudinal history.

---

### Flow 3: ASHA Worker Field Visits, Assisted Access & Offline Sync
1. Switch to the **ASHA Workspace** (`/worker/dashboard.html`).
2. Review the **Priority Village Households for Today** roster.
3. Click **"Assisted Login"** (`/worker/assisted-access.html`):
   - Select an elderly or illiterate citizen.
   - Check the **Verbal Consent Verification** box.
   - Launch an assisted session on the citizen's behalf (logged in the cryptographic audit trail).
4. Click **"Record Field Vitals"** (`/worker/field-visit.html`):
   - Record Blood Pressure ($148/92\text{ mmHg}$), Random Glucose ($182\text{ mg/dL}$), SpO2 ($98\%$), and temperature.
   - Save the record. It instantly updates both the patient's record and the doctor's triage dashboard.
5. Click **"Sync Queue"** (`/worker/sync.html`):
   - Queue offline household visits with 1 click.
   - Tap **"Sync All Records Now"** to simulate background payload encryption and central synchronization.

---

### Flow 4: Emergency 108 SOS Dispatch
1. In the Patient Portal, click **"Emergency 108 SOS"** (`/patient/emergency.html`).
2. Tap the large pulsating **SOS Button**.
3. Live GPS coordinates ($17.47^\circ\text{ N}, 78.35^\circ\text{ E}$) and critical health flags (Penicillin allergy, Type 2 DM) are transmitted to the 108 ambulance dispatch network.
4. Watch the simulated GPS tracking map animate the approaching ambulance in real-time.

---

## 🏗 System Architecture & Technology Stack

```
lifepatch-healthcare/
├── index.html                  # Enterprise Landing Page & System Overview
├── login.html                  # 1-Click Persona Chooser & ABHA Profiles
├── package.json                # Modern Vite tooling & scripts
├── manifest.json               # Progressive Web App (PWA) manifest
├── sw.js                       # Offline Cache & Service Worker Engine
├── css/
│   ├── design-system.css       # Design tokens, typography, dark/light themes
│   ├── components.css          # Cards, buttons, ABHA cards, tables, modals
│   ├── responsive.css          # Breakpoints for mobile, tablet, desktop
│   └── accessibility.css       # High-contrast, text scaling, reduced motion
├── js/
│   ├── vendor/
│   │   ├── lucide.js           # 100% Offline crisp vector SVG icon library
│   │   └── chart.js            # Interactive clinical analytics & vitals charts
│   ├── core/
│   │   ├── auth.js             # Session state & demo role switcher
│   │   ├── i18n.js             # Multilingual translations (EN, HI, TE)
│   │   ├── theme.js            # Light/Dark mode state management
│   │   ├── icons.js            # Lucide icon renderer helper
│   │   └── layout.js           # Shared header, sidebar, mobile nav, toasts
│   ├── db/
│   │   ├── database.js         # IndexedDB 17-store native client engine
│   │   ├── seed-data.js        # Synthetic Indian rural healthcare dataset
│   │   └── api.js              # Full CRUD API, JSON export/import, sync queue
│   └── modules/
│       ├── ai-summary.js       # Grounded clinical SOAP & triage summarizer
│       ├── voice.js            # Web Speech API recognition & speech synthesis
│       └── ocr.js              # Document scanning & optical character recognition
├── doctor/                     # Doctor Workspace (8 clinical views)
├── patient/                    # Patient Portal (8 citizen views)
├── worker/                     # ASHA Health Worker Portal (7 field views)
└── shared/                     # Accessibility, Help & Settings views
```

---

## 🛡 Security, Privacy & Compliance Principles

1. **Local-First Sovereign Data Storage**: No personal health data leaves the browser unless explicitly authorized. Data is persisted in native **IndexedDB** with JSON export/import capabilities.
2. **Ayushman Bharat (ABDM) Alignment**: Standardized 14-digit ABHA identifiers (`91-XXXX-XXXX-XXXX`) and patient-controlled consent revocation.
3. **Human-in-the-Loop Clinical AI**: AI algorithms assist with SOAP note structuring and threshold warnings, while clinical decisions remain strictly in the hands of registered medical officers.
4. **WCAG 2.1 AA Accessibility**: High-contrast outdoor mode, scalable typography, multilingual speech synthesis, and screen-reader accessible forms.

---

## 📜 License & Acknowledgments

- **Smart India Hackathon 2026** — Problem Statement SIH26133
- **Design System**: Tailored for Rural & Public Health in India
- **License**: MIT License
