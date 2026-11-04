# Gowda Jeevith Kariyappa — Personal Engineering Portfolio

> **Production Personal Portfolio & Technical Case Studies**  
> Target URL: [https://GowdaJeevithKariyappa.github.io](https://GowdaJeevithKariyappa.github.io)

This repository hosts the official personal engineering portfolio of **Gowda Jeevith Kariyappa**, a Computer Science and Engineering (Data Science) undergraduate at Presidency University, Bengaluru. The portfolio showcases applied projects across financial crime graph analytics, locally hosted AI companions, and full-stack software architectures.

---

## 🛠 Technology Stack

- **Core Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion & CSS keyframe animations
- **Icons**: Lucide React
- **Data Visualizations**: Recharts
- **Routing**: React Router (HashRouter for zero-fail GitHub Pages static hosting)
- **Deployment**: GitHub Pages via automated GitHub Actions CI/CD pipeline

---

## 📂 Project Structure

```text
GowdaJeevithKariyappa.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated deployment workflow
├── public/
│   ├── 404.html                # GitHub Pages SPA redirect fallback
│   ├── robots.txt              # Search engine crawling rules
│   ├── sitemap.xml             # Search engine XML index
│   ├── resume/                 # Configurable resume PDF storage
│   └── projects/               # Real visual artifacts & architecture diagrams
├── src/
│   ├── assets/                 # Project assets and graphic components
│   ├── components/             # Modular React UI components
│   │   ├── Navbar.tsx          # Sticky responsive header with active indicator
│   │   ├── Hero.tsx            # Technical hero section with profile snapshot
│   │   ├── About.tsx           # Narrative, quick facts, and spoken languages
│   │   ├── Projects.tsx        # Filterable project showcase grid
│   │   ├── ProjectCard.tsx     # Dynamic cards with metrics and status badges
│   │   ├── Skills.tsx          # Categorized technical skills (no fake progress bars)
│   │   ├── Education.tsx       # Degree timeline, OCI certification & internship
│   │   ├── Contact.tsx         # Direct connection channels & message composer
│   │   ├── Footer.tsx          # Dynamic copyright, social links & top scroll
│   │   └── SectionHeading.tsx  # Uniform technical section headings
│   ├── data/                   # Centralized data models & project configurations
│   │   ├── profile.ts          # Configurable personal details & contact fields
│   │   ├── projects.ts         # Full case studies & evaluation metrics
│   │   ├── skills.ts           # Technical categories and toolsets
│   │   └── education.ts        # Academic history and verified credentials
│   ├── hooks/                  # Custom React hooks (useActiveSection.ts)
│   ├── lib/                    # Shared utilities (utils.ts)
│   ├── pages/                  # Route view components
│   │   ├── Home.tsx            # Main single-page portfolio layout
│   │   ├── ProjectDetails.tsx  # Dedicated multi-tab technical case studies
│   │   └── NotFound.tsx        # Technical 404 error page
│   ├── styles/
│   │   └── globals.css         # Dark editorial styling & technical grid effects
│   ├── App.tsx                 # HashRouter setup & route definitions
│   └── main.tsx                # React DOM entry point
├── index.html                  # Semantic HTML5 shell with Open Graph & JSON-LD SEO
├── tailwind.config.js          # Dark engineering theme palette & typography
├── tsconfig.json               # Strict TypeScript configuration
├── vite.config.ts              # Vite configuration (base: '/')
└── package.json                # Project dependencies and script declarations
```

---

## 💻 Local Development

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GowdaJeevithKariyappa/GowdaJeevithKariyappa.github.io.git
   cd GowdaJeevithKariyappa.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Run TypeScript verification & production build:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚀 GitHub Pages Deployment

The repository is configured for automated deployment to GitHub Pages using GitHub Actions (`.github/workflows/deploy.yml`):

1. **Repository Settings**:
   - Go to your repository on GitHub: `https://github.com/GowdaJeevithKariyappa/GowdaJeevithKariyappa.github.io`
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

2. **Triggering Deployment**:
   - Push any commit to the `main` branch.
   - The `.github/workflows/deploy.yml` workflow triggers automatically, builds the static bundle, and publishes the site to `https://GowdaJeevithKariyappa.github.io`.

---

## ⚙️ Customization & Profile Updates

All personal information and project metadata are centralized in `src/data/`:
- `src/data/profile.ts`: Update email, phone, location, bio, or resume link.
- `src/data/projects.ts`: Update or add project details, live demo URLs, or metrics.
- `src/data/skills.ts`: Update technical skills and highlighted technologies.
- `src/data/education.ts`: Update academic details, certifications, or internships.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
