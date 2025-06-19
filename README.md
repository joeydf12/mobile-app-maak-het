# Buddy Connect 🤝

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=fff)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=fff)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Buddy Connect is een moderne mobiele applicatie gebouwd met een focus op verbinding en ondersteuning. Het platform is ontwikkeld met de nieuwste webtechnologieën om een snelle, responsieve en gebruiksvriendelijke ervaring te bieden. Deze app is een prototype gemaakt om te testen met de gebruiker, vanwege validatie bij de gebruiker kwam ik erachter dat dit niet bij het project paste vandaar dat dit niet verder is ontwikkeld.

## 🛠️ Gebruikte Technologieën

Dit project maakt gebruik van de volgende belangrijke technologieën:

- **React**: Een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces.
- **TypeScript**: Biedt typeveiligheid voor robuuste code en een verbeterde ontwikkelervaring.
- **Vite**: Een snelle build tool die zorgt voor een razendsnelle ontwikkelingsserver en optimale productiebuilds.
- **Tailwind CSS**: Een utility-first CSS framework voor het snel en responsief stylen van de applicatie.
- **shadcn/ui**: Een verzameling van herbruikbare UI-componenten gebouwd met Radix UI en Tailwind CSS.
- **React Router DOM**: Voor declaratieve routing in de applicatie.

## 📂 Projectstructuur

Hieronder vind je de hoofdmappenstructuur van het project:

```
mobile-app-maak-het/
├── public/            # Statische assets (afbeeldingen, favicon, etc.)
├── src/               # Broncode van de applicatie
│   ├── components/    # Herbruikbare React componenten
│   │   └── ui/        # UI-componenten van shadcn/ui
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functies
│   ├── pages/         # Pagina-componenten (routes)
│   ├── App.tsx        # Hoofdapplicatie component
│   ├── main.tsx       # Entry point van de applicatie
│   └── index.css      # Globale stijlen (Tailwind CSS imports)
├── .vscode/           # Visual Studio Code configuratie (indien aanwezig)
├── package.json       # Projectafhankelijkheden en scripts
├── package-lock.json  # Npm afhankelijkheidsvergrendeling (indien npm gebruikt)
├── bun.lockb          # Bun afhankelijkheidsvergrendeling (indien Bun gebruikt)
├── vite.config.ts     # Vite configuratie
├── tailwind.config.ts # Tailwind CSS configuratie
├── tsconfig.json      # TypeScript basisconfiguratie
├── eslint.config.js   # ESLint configuratie
└── README.md          # Projectdocumentatie
```

## 🚀 Functionaliteiten

Kernfunctionaliteiten van Buddy Connect:

-   **Moderne Frontend Stack**: Gebouwd met React, TypeScript en Vite voor een efficiënte en schaalbare ontwikkeling.
-   **Intuïtieve UI**: Gebruikmakend van shadcn/ui voor een consistente en gebruiksvriendelijke interface.
-   **Responsief Ontwerp**: Geoptimaliseerd voor diverse schermgroottes, met name mobiele apparaten.
-   **Client-side Routing**: Naadloze navigatie tussen verschillende pagina's met React Router DOM.
-   **Snelle Ontwikkeling**: Dankzij Tailwind CSS voor snelle styling en Vite voor snelle herlaadtijden.

## 📦 Installatie

### Systeem Vereisten

-   **Node.js**: Versie 18 of hoger
-   **npm** of **Bun**: Een package manager (npm 9.0.0+ of Bun 1.0+ aanbevolen)

### Installatie-instructies

1.  **Clone de repository:**

    ```bash
    git clone <JOUW_REPOSITORY_URL>
    cd mobile-app-maak-het
    ```

2.  **Installeer dependencies:**

    Gebruik npm:

    ```bash
    npm install
    ```

    Of gebruik Bun (indien geïnstalleerd):

    ```bash
    bun install
    ```

3.  **Start de ontwikkelserver:**

    Gebruik npm:

    ```bash
    npm run dev
    ```

    Of gebruik Bun:

    ```bash
    bun dev
    ```

    Open de applicatie in je browser (meestal op `http://localhost:5173` of een vergelijkbare poort). De exacte poort wordt in je terminal weergegeven.

### Belangrijke Notities:

-   Dit project gebruikt `lovable-tagger` in ontwikkelingsmodus. Dit kan visuele aanpassingen tonen die niet in productie zichtbaar zijn.
-   Omgevingsvariabelen worden in dit project momenteel niet actief gebruikt in `.env` bestanden voor kritieke tokens. Mocht je in de toekomst API keys of vergelijkbare variabelen nodig hebben, dan kunnen deze worden toegevoegd aan een `.env` bestand in de root van het project (bijv. `.env.local` voor lokale ontwikkeling).

## ⚙️ Beschikbare Scripts

De volgende scripts zijn beschikbaar via `npm` of `bun`:

-   `npm run dev` of `bun dev`: Start de ontwikkelserver.
-   `npm run build` of `bun build`: Compileert het project voor productie.
-   `npm run lint` of `bun lint`: Voert ESLint uit voor codekwaliteit.
-   `npm run preview` of `bun preview`: Start een lokale server om de productiebuild te bekijken.

## 🚀 Deployment

Dit project is geconfigureerd voor eenvoudige deployment. De `README.md` van Lovable vermeldt de volgende opties:

-   **Via Lovable Platform**: Open je project in Lovable en gebruik de 'Share -> Publish' optie.
-   **Statische Hosting**: Aangezien dit een Vite/React-applicatie is, kan het eenvoudig worden gedeployed naar platforms die statische sites hosten, zoals Netlify, Vercel, of GitHub Pages. Na het uitvoeren van `npm run build` (of `bun build`), vind je de productieklaar bestanden in de `dist/` map.

## 🔧 Configuratiebestanden

Belangrijke configuratiebestanden in dit project:

-   `vite.config.ts`: Hoofdconfiguratie voor Vite.
-   `tailwind.config.ts`: Configuratie voor Tailwind CSS.
-   `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuratiebestanden.
-   `eslint.config.js`: Configuratie voor ESLint.
-   `postcss.config.js`: Configuratie voor PostCSS.

## Bijdragen
We staan open voor bijdragen aan Buddy Connect! Hoewel dit project momenteel een prototype is en niet actief wordt doorontwikkeld, waarderen we alle inzichten of suggesties.

Mocht je een bug vinden of een idee voor een functionaliteit hebben, neem dan gerust contact met mij op joeydefijter11@gmail.com.

## Licentie
Dit project is gelicentieerd onder de MIT-licentie.

Het staat je vrij om deze software te gebruiken, te wijzigen en te verspreiden, op voorwaarde dat de originele copyright- en licentieaanduiding zijn opgenomen in alle kopieën of substantiële delen van de software.


## Veelgestelde Vragen (FAQ)
Hier zijn enkele veelgestelde vragen over Buddy Connect:

#### V: Waarom is dit project niet verder ontwikkeld?
A: Buddy Connect is ontwikkeld als een prototype voor gebruikerstesten. Op basis van gebruikersvalidatie werd vastgesteld dat het concept niet aansloot bij de bredere projectdoelen, wat leidde tot de beslissing om de ontwikkeling niet voort te zetten.

#### V: Ik heb moeite met het installeren van de afhankelijkheden. Wat moet ik doen?
A: Zorg ervoor dat je Node.js (versie 18 of hoger) en een pakketbeheerder (npm 9.0.0+ of Bun 1.0+) correct geïnstalleerd hebt. Probeer de cache van je pakketbeheerder te legen (npm cache clean --force of bun prune) en voer daarna npm install of bun install opnieuw uit.

#### V: De applicatie laadt niet in mijn browser na het starten van de ontwikkelserver.
A: Controleer je terminal voor het exacte poortnummer (meestal http://localhost:5173). Zorg er ook voor dat geen andere applicatie die poort gebruikt. Als het probleem aanhoudt, probeer dan je ontwikkelserver opnieuw op te starten.

### Wijzigingslog (Changelog)
Versie 0.1.0 - Initieel Prototype (Juni 2024)

Initiële projectconfiguratie met React, TypeScript, Vite, Tailwind CSS en shadcn/ui.
Basis UI en client-side routing geïmplementeerd.
Initiële gebruikerstesten en validatie uitgevoerd.
Besluit genomen om de ontwikkeling als prototype af te ronden.
