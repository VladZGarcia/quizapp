# 🧠 EZ Quiz Maker AI[🇬🇧 English README](./README.en.md)

En AI-driven quizapplikation byggd med **Next.js 15 App Router**, **TypeScript** och **Cohere AI**.# 🛍️ E-handelsplattform i Next.js

Projektet använder artificiell intelligens för att automatiskt generera quizfrågor från godtycklig text.

Användare kan spara sina quiz, granska historik och testa sina kunskaper med en interaktiv timer.

---Syftet med projektet är att lära oss omvandla en ide med hjälp av olika tekniker inom Next.js/React.

## 📑 Innehåll---

- [Om projektet](#-om-projektet)## 📑 Innehåll

- [Funktioner](#-funktioner)

- [Teknologier](#-teknologier)- [Om projektet](#-om-projektet)

- [Installation](#-installation)- [Funktioner](#-funktioner)

- [Användning](#-användning)- [Teknologier](#-teknologier)

- [Projektstruktur](#-projektstruktur)- [Installation](#-installation)

- [Lärdomar](#-lärdomar)- [Användning](#-användning)

- [Framtida förbättringar](#-framtida-förbättringar)- [Projektstruktur](#-projektstruktur)

- [Kontakt](#-kontakt)- [Arbetsflöde](#-arbetsflöde)

- [Sprintplan](#-sprintplan)

---- [Bidra](#-bidra)

- [Lärdomar](#-lärdomar)

## 📖 Om projektet- [Licens](#-licens)

- [Kontakt](#-kontakt)

Detta är ett individuellt projekt där jag har byggt en **AI-driven quizapplikation**.- [Individuell Reflektion](#individuell-reflektion)

Syftet har varit att träna på:

---

- Next.js 15 App Router och Server Components

- Integration med AI-tjänster (Cohere AI)## 📖 Om projektet

- Autentisering med Clerk

- Databashantering med SupabaseDetta är en gruppövning där målet var att bygga en **minimalistisk e-handelsplattform**.

- TypeScript och React hooksSyftet är att träna på:

- Responsiv design och dark mode

- Arbete i grupp (Agilt)

---- Arbete i projekt (GitHub)

- Next.js/React kod

## ✨ Funktioner

---

- ✅ AI-genererade quizfrågor från valfri text (Cohere AI)

- ✅ Användarkonton med Clerk-autentisering## ✨ Funktioner

- ✅ Spara quiz till databas (Supabase)

- ✅ Quizhistorik med sparade quiz- ✅ Startsida med Hero-sektion och CTA, utvalda produkter

- ✅ Interaktiv quiz med timer (15 sekunder per fråga)- ✅ Produktsida med sökfunktion och kategori filtrering

- ✅ Poängsystem och resultatsammanfattning- ✅ Sökfält och navigeringsfält

- ✅ Dark/light mode med systemdetektion- ✅ Adminsida med formulär för uppdatering, radering och skapande av produkt

- ✅ Responsiv design för mobil och desktop

- ✅ Hamburgernavigering för små skärmar---

---## 🛠 Teknologier

## 🛠 Teknologier- [Next.js 15 (App Router)](https://nextjs.org/)

- [TypeScript](https://www.typescriptlang.org/)

- [Next.js 15 (App Router)](https://nextjs.org/)- [Tailwind CSS](https://tailwindcss.com/)

- [TypeScript](https://www.typescriptlang.org/)- [DummyJSON - API](https://dummyjson.com/)

- [Tailwind CSS](https://tailwindcss.com/)- [Sonner - Toast](https://github.com/emilkowalski/sonner)

- [Clerk](https://clerk.com/) - Autentisering- [ZOD](https://zod.dev/)

- [Supabase](https://supabase.com/) - Databas- [WAVE](https://wave.webaim.org/)

- [Cohere AI](https://cohere.com/) - AI-generering

- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management---

---## ⚙️ Installation

## ⚙️ Installation```bash

# Klona repo

````bashgit clone https://github.com/VladZGarcia/ecommersepage.git

# Klona repo

git clone https://github.com/VladZGarcia/quizapp.git# Gå in i projektmappen

cd ecommersepage

# Gå in i projektmappen

cd quizapp# Installera beroenden

npm install

# Installera beroenden

npm install# Starta utvecklingsserver

npm run dev

# Konfigurera miljövariabler```

# Skapa en .env.local fil och lägg till:

# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=---

# CLERK_SECRET_KEY=

# NEXT_PUBLIC_SUPABASE_URL=## 🚀 Användning

# NEXT_PUBLIC_SUPABASE_ANON_KEY=

# COHERE_API_KEY=- Navigering -> navigeringsfält med sökfunktion

- Startsida -> hero med CTA som går till alla produkter + utvalda produkter + om oss + kontakt

# Starta utvecklingsserver- Produkt -> alla produkter + sökfält + kategorifiltrering

npm run dev- Produktdetalj -> produktbeskrivning + omdömen + recension + lagerstatus + fraktinformation + val av antal + liknande produkter

```- Om oss -> statisk sida med text

- Kontakt -> sida med kontaktformulär

---- Footer -> footer med länkar och nyhetsbrev

- Admin -> lista med alla produkter + radering

## 🚀 Användning- Admin/skapa -> formulär för att skapa upp produkt

- Admin/uppdatera -> formulär för att uppdatera befintlig produkt

- **Startsida** → Hero-sektion med CTA-knapp till quiz-skaparen

- **Quiz Input** → Skriv in eller välj exempeltext, AI genererar quizfrågor---

- **Quiz** → Svara på frågor med 15 sekunders timer per fråga

- **Resultat** → Se ditt resultat, spara quiz (kräver inloggning)## 📂 Projektstruktur

- **Historik** → Granska och återuppta sparade quiz

- **Dark Mode** → Automatisk systemdetektion eller manuell växling```

|-- app/

---|   |-- page.tsx                 # Startsida

|   |-- about/page.tsx           # Om oss

## 📂 Projektstruktur|   |-- admin/

|   |   |-- page.tsx             # Adminsida

```|   |   |-- create/page.tsx      # Produktskapande

|-- app/|   |   |-- update/[id]/page.tsx # Produktuppdatering

|   |-- page.tsx                 # Startsida|   |-- api/action.ts            # Server actions för formulärvalidering

|   |-- layout.tsx               # Root layout med providers|   |-- contact/page.tsx         # Kontaktsida

|   |-- quizInput/page.tsx       # Quiz input-sida|   |-- pages/products/

|   |-- quizzes/page.tsx         # Quiz-sida|   |   |--page.tsx              # Produktsida

|   |-- api/|   |   |--[id]/page.tsx         # Produktdetaljsida

|   |   |-- cohere/route.ts      # Cohere AI endpoint|-- components/                  # Återanvändbara komponenter

|   |   |-- quizzes/route.ts     # Quiz CRUD endpoint|-- components/breadcrumb/       # Breadcrumbkomponenter

|   |   |-- users/route.ts       # User sync endpoint|-- components/categories/       # Kategorikomponenter

|-- components/|-- components/Nav/              # Navigationskomponenter

|   |-- auth/                    # Autentiseringskomponenter|-- components/product-card/     # Produktkortkomponenter

|   |-- form/                    # Formulärkomponenter|-- components/product-details/  # Produktdetaljkomponenter

|   |   |-- formcard.tsx         # Quiz input-kort|-- lib/data/

|   |   |-- quiz_history.tsx     # Quiz-historik|   |   |-- pages.json           # Navigationsfältslänkar

|   |   |-- quiz_text_input.tsx  # Textinmatning|   |   |-- product-data.tsx     # API fetch funktioner

|   |-- layout/                  # Layout-komponenter|   |   |-- utils.ts             # Återanvändbara hjälpfunktioner

|   |   |-- navbar.tsx           # Navigation med hamburger|-- lib/interfaces/products.ts   # Återanvändbara interfaces

|   |   |-- footer.tsx           # Footer|-- public/                      # Bilder

|   |-- quiz/                    # Quiz-komponenter```

|   |   |-- Quiz.tsx             # Huvudquiz-komponent

|   |   |-- handle_input.tsx     # Input-hantering---

|   |-- theme/                   # Theme-komponenter

|   |   |-- ThemeProvider.tsx    # Theme context## 📈 Arbetsflöde

|   |   |-- ThemeToggle.tsx      # Theme-switch

|-- hooks/- Grupparbete i agila sprintar (SCRUM)

|   |-- useSaveQuiz.ts           # Quiz-sparande hook- Delade upp issues i feature branches

|   |-- useSyncUser.ts           # User-synk hook- PR + kodgranskning

|-- lib/

|   |-- supabase.ts              # Supabase-klient---

|-- middleware.ts                # Clerk middleware

```## 🗓 Sprintplan



---### Sprint 1 - Grundläggande struktur



## 📚 Lärdomar- Bestämde vilket API vi skulle använda

- Tog fram design med hjälp av Figma

Genom detta projekt har jag lärt mig:- Satte upp Next.js-projektet

- Skapade menyer & statiska sidor

- **Next.js 15 App Router** – Server Components vs Client Components, Server Actions

- **AI-integration** – Att arbeta med Cohere AI API för textgenerering### Sprint 2 - Produktsidan

- **Autentisering** – Implementera Clerk med modal mode och redirect-hantering

- **Databas** – Supabase-integration med Row Level Security (RLS)- Satte upp produktsidan och ingående komponenter

- **State Management** – Custom hooks (useCallback, useEffect) för optimerad rendering- Satte upp produktdetaljsidan och ingående komponenter

- **Dark Mode** – next-themes med systemdetektion och manuell toggle- Jobbade med nya ideér/tillägg på tidigare komponenter

- **Responsiv Design** – Mobile-first approach med Tailwind breakpoints

- **TypeScript** – Strikt typning för säkrare kod### Sprint 3 - Adminsidan

- **localStorage** – Dataöverföring mellan komponenter

- **Performance** – Förhindra onödiga re-renders och API-anrop- Satte upp Adminsidan och tillhörande komponenter



### Specifika utmaningar jag löste:### Sprint 4 - Finputs



1. **Infinite loop-problem** – Quiz history-komponenten gjorde oändliga API-anrop. Löste genom att wrappa funktioner i `useCallback` med korrekta dependencies.- Förbättrade befintliga komponenter och finputsade på detaljer



2. **Quiz-laddning från historik** – När användare klickade på sparad quiz genererades ny quiz istället. Löste med flagga (`shouldGenerate`) för att skilja på ny generering och laddning.---



3. **Theme-integration** – Next.js 15 kräver att ThemeProvider placeras i `<body>` istället för `<html>` för korrekt script-injektion.## 🤝 Bidra



4. **Sign-in redirect** – Implementerade `forceRedirectUrl` med `usePathname` för att behålla användaren på samma sida efter inloggning.Vill du bidra?



5. **Layout-konsistens** – Använde `flex-1` och flexbox-kedjor för att göra textarea adaptiv till tillgängligt utrymme.1. Forka projektet

2. Skapa en feature-branch (`git checkout ......`)

---3. Commit & push

4. Skicka en Pull Request

## 🔮 Framtida förbättringar

---

Jag planerar att vidareutveckla:

## 📚 Lärdomar

- **Fler quiztyper** – Sant/falskt, flervalsalternativ, fritext

- **Svårighetsgrader** – AI genererar frågor baserat på vald svårighetsgrad- Skillnaden mellan Server & Client Components i Next.js

- **Delning av quiz** – Dela quiz med andra via länk- Agila metoder

- **Statistik** – Detaljerad statistik över resultat över tid- API

- **Kategorier** – Organisera quiz i kategorier- Responsivitet

- **Multiplayer** – Tävla mot andra i realtid- Github feature branches

- **Anpassad timer** – Låt användaren välja tid per fråga

- **Export** – Exportera quiz som PDF eller JSON---



---## Licens



## ✍️ KontaktDetta projekt är utvecklat i utbildningssyfte och är inte avsett för produktion.



- GitHub: [VladZGarcia](https://github.com/VladZGarcia/)---

- Projekt: [quizapp](https://github.com/VladZGarcia/quizapp)

## ✍️ Kontakt

---

- https://github.com/VladZGarcia/

## 📸 Teknisk Översikt- https://github.com/MissKowalik/

- https://github.com/ebobic/

### Dataflöde- https://github.com/Consolider/



1. Användare skriver in text i quiz input---

2. Text skickas till Cohere AI API

3. AI genererar quizfrågor i JSON-format## Bilder

4. Quiz visas med interaktiv timer

5. Resultat sparas till Supabase (om inloggad)![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/1.jpg "Startsida")

6. Quiz kan återupptas från historik![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/2.jpg "Featured Products")

![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/3.jpg "Contact + Footer")

### Arkitektur![alt text](https://github.com/VladZGarcia/ecommersepage/blob/dev/public/images/4.jpg "Product Detail")



- **Frontend**: Next.js 15 App Router med React Server Components---

- **Backend**: Next.js API Routes för Cohere AI och Supabase

- **Databas**: PostgreSQL (via Supabase) med RLS## Individuell Reflektion

- **Autentisering**: Clerk med middleware-skydd

- **Styling**: Tailwind CSS med custom dark modeMin största insats i e-handelsprojektet har varit att designa och implementera kärnkomponenter för produktdatahantering och produktpresentation. Jag har skapat både logik och UI-komponenter som utgör grunden för hur produkter hanteras och visas i applikationen.



### Säkerhet### Filer och mappar jag har skapat



- Clerk middleware för route-protection- **product-data.tsx**

- Supabase RLS policies för dataåtkomst  Jag har byggt hela datalagret för produkter, inklusive funktioner för att hämta, söka, filtrera, lägga till, uppdatera och ta bort produkter via API. Denna fil är navet för all produktdata och gör det enkelt att återanvända logik i hela projektet.

- API-nycklar i environment variables

- User ID-validering på server-side- **products.ts**

  Jag har definierat alla TypeScript interfaces för produkter, kategorier, recensioner och metadata. Detta har gett projektet en robust typstruktur och säkerställt att all produktdata är konsekvent och typad, vilket minskar buggar och gör utvecklingen snabbare.

---

- **product-card mappen**

Detta projekt är utvecklat i utbildningssyfte och visar mina färdigheter inom modern webbutveckling med Next.js, AI-integration och fullstack-utveckling.  Jag har skapat och strukturerat alla komponenter för att visa enskilda produkter i UI:t, inklusive bild, detaljer, header och knappar. Dessa komponenter är återanvändbara och används i produktlistor, sökresultat och på produktsidor. Jag har lagt stor vikt vid att designa dem responsivt och tillgängligt.


- **product-details mappen**
  Jag har byggt komponenter för att visa detaljerad information om en produkt, såsom beskrivning, pris, bilder, recensioner och fraktinformation. Dessa komponenter gör det möjligt för användaren att få en komplett bild av produkten och fatta köpbeslut.

### Funktionalitet och integrationer jag har bidragit med

- Jag har bidragit med att få **SearchBar**, **CategoryList** och **Pagination** att samverka.
  Genom att vidareutveckla logiken i projektet har jag gjort det möjligt för användaren att söka, filtrera på kategori och samtidigt bläddra mellan sidor – med bevarade filter och söktermer i URL:en.
  Detta har krävt att jag integrerat och synkroniserat dessa komponenter så att de fungerar sömlöst tillsammans, även om jag inte skapade dem från grunden.

- Jag har implementerat att **search-bar** stängs automatiskt när man klickar utanför sökfältet, vilket förbättrar användarupplevelsen och minskar risken för att sökfältet ligger kvar öppet i onödan.

- Jag har även lagt till funktionalitet så att **search-bar** stängs direkt när man klickar på ett produktkort i searchbar-dropdown, vilket ger ett smidigt och intuitivt flöde för användaren.

## Tekniker och lösningar

- **TypeScript interfaces** för säker och skalbar datahantering
- **Asynkrona API-anrop** med error handling för robust dataloggik
- **Modulär komponentstruktur** i React/Next.js för återanvändbarhet och enkel vidareutveckling
- **Responsiv design** med Tailwind CSS för att optimera användarupplevelsen på alla enheter
- **Integration av filter, sökning och paginering** för en sammanhängande och användarvänlig produktupplevelse
- **Event-hantering och DOM-interaktion** för att hantera klick utanför och stänga komponenter automatiskt

## Resultat och värde

Genom att skapa dessa filer och mappar samt integrera filter, sökning och paginering har jag lagt grunden för en skalbar och underhållbar e-handelsplattform. Min kod har gjort det enkelt att hantera produktdata, visa produkter på ett attraktivt sätt och bygga vidare på funktionaliteten i projektet. Jag har bidragit med både teknisk struktur och användarvänliga gränssnitt som är centrala för projektets framgång.

## Framtida förbättringar

Jag ser potential att vidareutveckla:

- Mer avancerad filtrering och sortering av produkter
- Caching och optimering av API-anrop
- Fler UI-förbättringar för produktpresentation och interaktion
- Förbättrad felhantering och användarfeedback
````
