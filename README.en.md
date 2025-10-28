# 🧠 EZ Quiz Maker AI

An AI-powered quiz application where you can generate quiz questions from any text, save quizzes, and test your knowledge. Built with Next.js 15, TypeScript, Supabase, and Cohere AI.

---

## 📑 Table of Contents

- [🚀 About the Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠 Technologies](#-technologies)
- [⚙️ Installation](#️-installation)
- [📖 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [💡 Learnings](#-learnings)
- [🔮 Future Improvements](#-future-improvements)
- [✍️ Contact](#-contact)

---

## 🚀 About the Project

This is a solo project where I built a fullstack application to create, save, and play AI-generated quizzes. The goal was to learn modern web development with Next.js App Router, AI integration, authentication, and database management.

---

## ✨ Features

- 🤖 AI-generated quiz questions from any text (Cohere AI)
- 👤 Login and authentication (Clerk)
- 💾 Save quizzes and view quiz history (Supabase)
- ⏱️ Timer: 15 seconds per question
- 🎯 Scoring and results page
- 🌓 Dark/light mode with system detection
- 📱 Mobile-friendly and responsive design
- 🍔 Hamburger menu for small screens

---

## 🛠 Technologies

- **Next.js 15** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Clerk** (authentication)
- **Supabase** (database)
- **Cohere AI** (quiz generation)
- **next-themes** (dark mode)

---

## ⚙️ Installation

```bash
git clone https://github.com/VladZGarcia/quizapp.git
cd quizapp
npm install
```

Create a `.env.local` file with:

```
COHERE_API_KEY=your_cohere_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Start the development server:

```bash
npm run dev
```

---

## 📖 Usage

1. Go to the start page and click "Create Quiz"
2. Enter or paste any text
3. Let the AI generate quiz questions
4. Answer the questions (15 seconds per question)
5. View your results and save the quiz (login required)
6. Go to history to view and resume saved quizzes

---

## 📂 Project Structure

```
|-- app/
|   |-- globals.css                # Globala stilar
|   |-- layout.tsx                 # Root layout och providers
|   |-- not-found.tsx              # 404-sida
|   |-- page.tsx                   # Startsida
|   |-- about/page.tsx             # Om oss
|   |-- contact/page.tsx           # Kontaktsida
|   |-- privacy/page.tsx           # Integritetspolicy
|   |-- terms/page.tsx             # Användarvillkor
|   |-- quizInput/page.tsx         # Quiz input (textinmatning)
|   |-- quizzes/page.tsx           # Quiz och resultat
|   |-- api/
|   |   |-- cohere/route.ts        # AI-generering (Cohere endpoint)
|   |   |-- quizzes/route.ts       # Quiz-API (CRUD)
|   |   |-- users/route.ts         # User sync endpoint
|-- components/
|   |-- auth/                      # Autentisering (Clerk)
|   |-- form/                      # Formulär, quizhistorik, input
|   |-- layout/                    # Navbar, footer
|   |-- quiz/                      # Quizkomponenter (logik, UI)
|   |-- shared/                    # Återanvändbara knappar m.m.
|   |-- theme/                     # ThemeProvider, ThemeToggle
|-- example_text/                  # Exempeltexter för quiz
|-- hooks/
|   |-- useSaveQuiz.ts             # Hook för att spara quiz
|   |-- useSyncUser.ts             # Hook för att synka användare
|-- lib/
|   |-- supabase.ts                # Supabase-klient
|-- public/
|   |-- example.json               # Exempeldata
|-- middleware.ts                  # Clerk middleware
|-- next.config.js                 # Next.js-konfiguration
|-- tailwind.config.js             # Tailwind-konfiguration
|-- tsconfig.json                  # TypeScript-konfiguration
|-- package.json                   # Projektmetadata och beroenden
```

---

## 💡 Learnings

- The difference between Server and Client Components in Next.js 15
- AI integration with Cohere API
- Authentication and redirect handling with Clerk
- Supabase and Row Level Security
- State management with custom hooks and useCallback
- Mobile-first and responsive design with Tailwind
- Optimizing rendering and API calls

---

## 🔮 Future Improvements

- More quiz types (e.g. true/false, multiple choice)
- Difficulty levels
- Share quizzes via link
- Statistics and user progress
- Multiplayer mode

---

## ✍️ Contact

- GitHub: [VladZGarcia](https://github.com/VladZGarcia)
- Project: [quizapp](https://github.com/VladZGarcia/quizapp)

---

This project was developed for educational purposes and demonstrates my skills in modern web development, AI, and fullstack engineering.
