# Asis Jovin A — Portfolio

Cloud & DevOps Engineer portfolio built with React + Tailwind CSS, hosted free on Vercel.

## 🚀 Quick Start (Local)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📦 Build

```bash
npm run build
```

---

## 🌐 Deploy to Vercel (Free — 5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `portfolio` repository
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site is live at `https://your-project.vercel.app` 🎉

### Step 3: Custom Domain (optional, free)
- In Vercel dashboard → Settings → Domains
- Add your domain (e.g. `asisjovinfernando.dev`)

---

## 📧 Set Up Contact Form (EmailJS — Free)

The contact form uses EmailJS (200 emails/month free — no backend needed).

### Steps:
1. Go to https://emailjs.com and create a free account
2. **Add Email Service**: Connect your Gmail → copy **Service ID**
3. **Create Template**: Use these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: {{subject}}
   Message: {{message}}
   ```
   Copy **Template ID**
4. Go to **Account** → copy **Public Key**
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   ```

---

## 📄 Add Resume PDF

Place your resume PDF at:
```
public/resume.pdf
```

The "Download Resume" button in the hero will automatically link to it.

---

## ✏️ Customise Content

All your personal data is in one file:
```
src/data.js
```

Edit it to update: name, bio, skills, experience, projects, certifications.

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx        ← Typewriter animation, stats
│   │   ├── About.jsx       ← Bio + terminal card
│   │   ├── Skills.jsx      ← 8 skill categories + certs
│   │   ├── Experience.jsx  ← Timeline with results
│   │   ├── Projects.jsx    ← 2 featured projects
│   │   ├── Contact.jsx     ← EmailJS contact form
│   │   └── Footer.jsx
│   ├── data.js             ← ✏️ Edit all your content here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json             ← Vercel deploy config
└── package.json
```

---

## 🛠 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** — dark terminal theme
- **EmailJS** — contact form (no backend)
- **Lucide React** — icons
- **Vercel** — hosting (free)

---

## 💰 Total Cost: $0

| Service | Free Tier |
|---|---|
| Vercel | Unlimited personal projects |
| EmailJS | 200 emails/month |
| GitHub | Unlimited public repos |
