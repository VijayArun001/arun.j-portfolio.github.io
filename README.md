# Arun J — Portfolio v2

Professional portfolio built with React 18, TypeScript, Vite, Zustand, TanStack Query, and Zod.

---

## ⚡ Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
```

---

## 📧 EmailJS Setup (REQUIRED for contact form email)

This takes about 5 minutes and is completely free.

### Step 1 — Create EmailJS account
Go to https://www.emailjs.com/ and sign up free.

### Step 2 — Add Email Service
1. Go to **Email Services** → Add New Service
2. Choose **Gmail**
3. Click **Connect Account** → sign in with `arunjegan001@gmail.com`
4. Copy the **Service ID** (e.g. `service_abc1234`)

### Step 3 — Create Email Template
1. Go to **Email Templates** → Create New Template
2. Set up the template like this:

```
Subject: New Portfolio Message: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
```

3. Copy the **Template ID** (e.g. `template_xyz7890`)

### Step 4 — Get Public Key
Go to **Account** → **General** → copy your **Public Key**

### Step 5 — Add to Contact.tsx
Open `src/components/Contact.tsx` and replace these 3 lines:

```typescript
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← paste here
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← paste here
```

Done! The contact form will now send emails directly to your Gmail.

---

## 💬 WhatsApp — Already Working

WhatsApp is already wired up to `+91 93604 64364`. No setup needed.

When someone clicks **Send via WhatsApp**, it:
1. Pre-fills their name, email, and message into WhatsApp
2. Opens WhatsApp with your number pre-filled
3. They just hit Send

---

## 🚀 Deploy to Netlify

### Option A — Drag & Drop (fastest)
```bash
npm run build
```
Then drag the `dist/` folder to https://app.netlify.com/drop

### Option B — GitHub + Auto Deploy (recommended)
1. Push this project to a GitHub repo
2. Go to https://app.netlify.com → **Add new site** → **Import from Git**
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy**

Every time you push to GitHub, Netlify auto-deploys. ✅

The `netlify.toml` handles SPA routing automatically.

---

## 📁 Project Structure

```
src/
├── components/       # UI components + CSS Modules
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Experience
│   ├── Projects
│   ├── Contact      ← EmailJS + WhatsApp wired here
│   └── Footer
├── data/
│   └── portfolioData.ts   ← EDIT THIS to update content
├── hooks/
│   ├── useIntersectionObserver.ts
│   └── useActiveSection.ts
├── schemas/
│   └── contactSchema.ts   ← Zod validation
├── store/
│   └── uiStore.ts         ← Zustand state
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

## ✏️ Updating Content

All portfolio content is in **`src/data/portfolioData.ts`**.
Edit projects, skills, and experience there — nothing else needs to change.

## 📄 Resume PDF

Place your `Arun_J_Resume.pdf` file inside the `public/` folder.
The **Download Resume** button in the navbar will link to it automatically.
