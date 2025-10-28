# [🇬🇧 English README](./README.en.md)

# 🧠 EZ Quiz Maker AI

En AI-driven quizapplikation där du kan generera quizfrågor från valfri text, spara quiz, och testa dina kunskaper. Byggd med **Next.js 15 TypeScript Supabase** och **Cohere AI**.

---

## � Innehåll

- [🚀 Om projektet](#-om-projektet)
- [✨ Funktioner](#-funktioner)
- [🛠 Teknologier](#-teknologier)
- [⚙️ Installation](#️-installation)
- [📖 Användning](#-användning)
- [📂 Projektstruktur](#-projektstruktur)
- [📈 Arbetsflöde](#-arbetsflöde)
- [🤝 Bidra](#-bidra)
- [💡 Lärdomar](#-lärdomar)
- [🔮 Framtida förbättringar](#-framtida-förbättringar)
- [✍️ Kontakt](#-kontakt)
- [Licens](#-licens)

---

## �🚀 Om projektet

Detta är ett individuellt projekt där jag har byggt en fullstack-applikation för att skapa, spara och spela **AI-genererade quiz**. Syftet har varit att lära mig modern webbutveckling med Next.js App Router, AI-integration, autentisering och databas.

---

## ✨ Funktioner

- 🤖 AI-genererade quizfrågor från valfri text (Cohere AI)
- 👤 Inloggning och autentisering (Clerk)
- 💾 Spara quiz och visa quizhistorik (Supabase)
- ⏱️ Timer: 15 sekunder per fråga
- 🎯 Poängräkning och resultatsida
- 🌓 Dark/light mode med systemdetektion
- 📱 Mobilanpassad och responsiv design
- 🍔 Hamburger-meny för små skärmar

---

## 🛠 Teknologier

- [**Next.js 15** (App Router, Server Components)](https://nextjs.org/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**Clerk** (autentisering)](https://clerk.com/)
- [**Supabase** (databas)](https://supabase.com/)
- [**Cohere AI** (quizgenerering)](https://cohere.com/)
- [**next-themes** (dark mode)](https://github.com/pacocoursey/next-themes)

---

## ⚙️ Installation

```bash
git clone https://github.com/VladZGarcia/quizapp.git
cd quizapp
npm install
```

Skapa en `.env.local`-fil med:

```
COHERE_API_KEY=din_cohere_nyckel
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=din_clerk_publishable_key
CLERK_SECRET_KEY=din_clerk_secret_key
NEXT_PUBLIC_SUPABASE_URL=din_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=din_supabase_anon_key
```

Starta utvecklingsservern:

```bash
npm run dev
```

---

## 📖 Användning

1. Gå till startsidan och klicka på "Skapa Quiz"
2. Skriv eller klistra in valfri text
3. Låt AI:n generera quizfrågor
4. Svara på frågorna (15 sekunder per fråga)
5. Se ditt resultat och spara quizet (kräver inloggning)
6. Gå till historik för att se och återuppta sparade quiz

---

## 📂 Projektstruktur

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

## 📈 Arbetsflöde

Eftersom jag arbetade ensam med projektet använde jag **GitHub Projects** för att strukturera och planera mitt arbete. Jag skapade issues för att dela upp projektet i mindre delmål och funktioner. Varje större funktion eller bugg fick en egen issue, vilket gjorde det lättare att prioritera och följa min egen utvecklingsprocess.

Jag arbetade i en utvecklingsbranch (t.ex. dev) och gjorde regelbundna commits för varje avklarad uppgift. När en issue var löst stängde jag den på GitHub. På så sätt fick jag en tydlig överblick över vad som var gjort och vad som återstod.

Detta arbetsflöde hjälpte mig att hålla projektet organiserat, även som ensam utvecklare, och gav en bra historik över projektets utveckling.

---

## 🤝 Bidra

Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout ......`)
3. Commit & push
4. Skicka en Pull Request

---

## 💡 Lärdomar

- Skillnaden mellan Server och Client Components i Next.js 15
- AI-integration med Cohere API
- Autentisering och redirect-hantering med Clerk
- Supabase och Row Level Security
- State management med custom hooks och useCallback
- Mobile-first och responsiv design med Tailwind
- Optimering av rendering och API-anrop

---

## 🔮 Framtida förbättringar

- Fler quiztyper (t.ex. sant/falskt, flervalsfrågor)
- Svårighetsgrader
- Dela quiz via länk
- Statistik och användarprogress
- Multiplayer-läge

---

## ✍️ Kontakt

- GitHub: [VladZGarcia](https://github.com/VladZGarcia)
- Projekt: [quizapp](https://github.com/VladZGarcia/quizapp)

---

## Licens

Detta projekt är utvecklat i utbildningssyfte och visar mina kunskaper inom modern webbutveckling, AI och fullstack.

---
