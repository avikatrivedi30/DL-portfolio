# 🚀 Avika Trivedi — Space Exploration Portfolio & Mission Control

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed around an authentic aerospace / mission control exploration narrative tailored for a B.Tech student interested in AI, modern web engineering, and digital productivity.

---

## 🛰️ Mission Concept & Design Highlights

* **Hero / Mission Launch**: Real-time telemetry indicators, IST mission clock, live coordinates (`26.9124° N, 75.7873° E [Jaipur, India]`), orbital SVG rings, and call-to-action vectors.
* **Mission Profile (About Me)**: Astronaut / Specialist dossier featuring an operator badge, academic affiliation (**JECRC University**), and core research vectors.
* **Launch Timeline (Education)**: Chronological ascent trajectory outlining B.Tech coursework, key learning areas, and developmental phases.
* **Mission Capabilities (Skills)**: Subsystem panels for HTML5, CSS3, JavaScript, Python, Artificial Intelligence, Generative AI, Web Development, and Digital Productivity.
* **Exploration Missions (Projects)**: Planetary exploration cards with specs modals, tech tags, and links for *Mission Odyssey*, *Mission Nova AI*, and *Mission Chronos*.
* **Mission Log (Achievements)**: Verifiable flight badges and milestone certificates, with dedicated slots for hackathons and future certifications.
* **Communication Center (Contact)**: Telemetry array console with direct channels (Email with 1-click copy, LinkedIn, GitHub) and an interactive dispatch terminal.
* **Onboard Mission AI (Future-Ready)**: Floating "Astra" assistant dock pre-loaded with an accurate local knowledge base and a modular hook (`src/services/aiService.js`) to plug in Google Gemini API or OpenAI API.

---

## 🛠️ Quick Start & Local Development

### 1. Requirements
* **Node.js** (v18+ or v20+)
* **npm** (comes with Node.js)

### 2. Run Development Server
```bash
# Navigate to the project directory
cd avika-portfolio

# Start the Vite development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
# Build optimized static assets into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 How to Customize Your Portfolio

All your personal details, links, projects, skills, and achievements are organized in a single file:
👉 **`src/data/portfolioData.js`**

### To Update Your Information:
1. **Name & Role**: Edit `portfolioData.personal.name` and `portfolioData.personal.role`.
2. **Email & Socials**: Edit `portfolioData.personal.email`, `portfolioData.personal.linkedIn`, and `portfolioData.personal.gitHub`.
3. **Projects**: Add, remove, or modify objects inside `portfolioData.projects`.
4. **Achievements**: Add your certificates, hackathons, and awards in `portfolioData.achievements`.
5. **Skills**: Adjust proficiency levels and tags in `portfolioData.skills`.

---

## 🤖 Connecting the Mission AI (Optional Gemini API)

The portfolio includes an onboard AI assistant dock (**Astra**) that currently responds to questions using your verified local knowledge base.

To connect **Google Gemini API**:
1. Get a free API key from [Google AI Studio](https://aistudio.google.com).
2. Create a `.env` file in the root folder:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
3. Follow the instructions in `src/services/aiService.js` to enable direct multi-turn AI responses.

---

## 🌐 One-Click Deployment to Vercel & GitHub

### Deploy to Vercel (Recommended):
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of space mission portfolio"
   git branch -M main
   git remote add origin https://github.com/avikatrivedi30/portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite** — click **Deploy**!

---

## 📂 Project Architecture

```
avika-portfolio/
├── index.html                   # HTML template with Space Grotesk & Inter fonts
├── package.json                 # React 18, Vite 5, Tailwind CSS, Lucide React
├── tailwind.config.js           # Custom space palette, glow effects & animations
├── vite.config.js               # Fast Vite bundler configuration
├── src/
│   ├── main.jsx                 # React root render
│   ├── App.jsx                  # Main page orchestrator
│   ├── index.css                # Custom space scrollbars & utility classes
│   ├── data/
│   │   └── portfolioData.js     # 📌 Central configuration file (edit your details here!)
│   ├── services/
│   │   └── aiService.js         # Future AI API integration hook
│   └── components/
│       ├── StarCanvas.jsx       # 60fps 2D HTML5 canvas starfield
│       ├── Navbar.jsx           # Mission Control navigation & IST clock
│       ├── Hero.jsx             # Mission launch header & orbital geometry
│       ├── About.jsx            # Mission profile dossier & core vectors
│       ├── Education.jsx        # Launch trajectory timeline & learning areas
│       ├── Skills.jsx           # Mission capabilities & subsystem panels
│       ├── Projects.jsx         # Planetary missions & detailed spec modal
│       ├── Achievements.jsx     # Flight badges & verifiable milestones
│       ├── Contact.jsx          # Communication console & message dispatch
│       ├── Footer.jsx           # Mission Control telemetry sign-off
│       └── MissionAIModal.jsx   # Onboard Mission AI Assistant dock
```

---

*Mission Control Status: Nominal. Designed for Avika Trivedi.*
