# Toneff-Festivalen – Copilot Instructions

## Project Overview

A festival website for **Toneff-Festivalen**, a Norwegian music festival on **29. august 2026** in the Oslo area. Ticket price ~1500 NOK via Ticketmaster. First year, volunteer-driven. No phones allowed at the festival.

Confirmed artists: **Flammer Dance Band**, **Tuva og Valkyrien All Star**, **Tigerstate**, **Todd Terje**, **Three Sous**, **Pumpegris**, **Why Kai**.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, `src/` layout)
- **styled-components** — all styling; components must include `'use client'` when using it
- **next/font/google** — Bebas Neue (display/headings via `--font-bebas`) + Inter (body via `--font-inter`), loaded in `src/app/layout.tsx`

## Commands

```bash
npm run dev     # start dev server at localhost:3000
npm run build   # production build (also runs TypeScript check)
npm run start   # serve production build
```

## Architecture

```
src/
  app/                   # Next.js App Router pages (server components, export metadata)
    page.tsx             # Home → renders <HomePage />
    program/page.tsx     # Programme → renders <ProgramPage />
    for-nerds/page.tsx   # Volunteer TODO list → renders <ForNerdsPage />
    layout.tsx           # Root layout: fonts, StyledComponentsRegistry, Providers, Navbar, Footer
    globals.css          # Minimal CSS reset only
  components/            # All UI components ('use client' where styled-components is used)
    Providers.tsx        # ThemeProvider + LangProvider (must wrap everything)
    Navbar.tsx           # Sticky top nav, hamburger on mobile, NO/EN toggle
    Footer.tsx           # Discord link + copyright
    LogoPlaceholder.tsx  # Yellow box placeholder until logo is designed
    HomePage.tsx         # Hero: big Bebas Neue title, date, Ticketmaster CTA
    ProgramPage.tsx      # Lineup poster (headliners → mains → support row)
    ForNerdsPage.tsx     # Organizer TODO list with filter + progress bar
  lib/
    registry.tsx         # styled-components SSR registry (required for App Router)
    theme.ts             # Design tokens: colors, fonts, spacing, breakpoints
    i18n.tsx             # LangProvider + useLang() hook, NO/EN translations
    artists.ts           # Artist data (name, image path, tier: headliner/main/support)
    todos.ts             # Hardcoded organizer TODO items with done/volunteer flags
  types/
    styled.d.ts          # DefaultTheme augmentation for full typed theme in styled-components
```

## Key Conventions

- **Server/Client split**: `app/**/page.tsx` files are server components that only export `metadata` and render a single client component from `components/`. Never use styled-components directly in page files.
- **styled-components transient props**: Use `$propName` (dollar-prefix) for props that should not be forwarded to the DOM (e.g. `$active`, `$tier`, `$done`).
- **Theme access**: Always use `${({ theme }) => theme.colors.xxx}` — never hardcode colors or font names. The full theme shape is in `src/lib/theme.ts`.
- **i18n**: Use `useLang()` hook in client components. `t` object is typed from the `no` translations. Add keys to both `no` and `en` simultaneously. Language is `Lang = 'no' | 'en'`.
- **Images**: Artist images live in `public/imgs/`. Use `next/image` with `fill` + `sizes` for thumbnails.
- **Breakpoints**: Only one breakpoint: `theme.breakpoints.mobile = '768px'`. Mobile-first design.

## Design System

- **Colors**: Yellow `#F5C800` on white/off-white base. Never dark mode.
- **Display font**: Bebas Neue — used for all headings, festival name, artist names. Uppercase, tight line-height.
- **Body font**: Inter — used for all body text, nav, labels, badges.
- **Logo**: Not yet designed. `LogoPlaceholder` renders a yellow box with "TONEFF".
- **Tickets**: Link to Ticketmaster (`https://www.ticketmaster.no`). Update URL constant in `HomePage.tsx` when live listing is available.
- **Discord**: Placeholder URL in `Footer.tsx` and `ForNerdsPage.tsx` — update `DISCORD_URL` constant when live.

