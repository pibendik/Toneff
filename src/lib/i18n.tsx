'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'no' | 'en'

const translations = {
  no: {
    nav: {
      home: 'Hjem',
      program: 'Program',
      forNerds: 'For nerds',
    },
    home: {
      date: '29. august 2026',
      location: 'Oslo-området',
      subtitle: 'En festival for deg som vil ha det bra.',
      ticketsCta: 'Kjøp billetter',
      ticketsNote: 'Via Ticketmaster · kr 1 500',
      noPhonesLabel: 'Ingen mobiltelefoner tillatt',
    },
    program: {
      heading: 'Program',
      date: '29. august 2026 · Oslo-området',
    },
    forNerds: {
      heading: 'For nerds',
      subtitle:
        'Vi trenger hjelp til å bygge denne festivalen! Her er status på alt som må gjøres — si ifra på Discord hvis du vil bidra.',
      done: 'Ferdig',
      pending: 'Gjenstår',
      discordCta: 'Bli med på Discord',
    },
    footer: {
      rights: '© Toneff-Festivalen 2026',
      discord: 'Bli med på Discord',
    },
  },
  en: {
    nav: {
      home: 'Home',
      program: 'Programme',
      forNerds: 'For nerds',
    },
    home: {
      date: 'August 29, 2026',
      location: 'Oslo area, Norway',
      subtitle: 'A festival for those who want a good time.',
      ticketsCta: 'Buy tickets',
      ticketsNote: 'Via Ticketmaster · NOK 1,500',
      noPhonesLabel: 'No phones allowed',
    },
    program: {
      heading: 'Programme',
      date: 'August 29, 2026 · Oslo area',
    },
    forNerds: {
      heading: 'For nerds',
      subtitle:
        "We need help building this festival! Here's the status of everything — reach out on Discord if you want to contribute.",
      done: 'Done',
      pending: 'Pending',
      discordCta: 'Join our Discord',
    },
    footer: {
      rights: '© Toneff-Festivalen 2026',
      discord: 'Join our Discord',
    },
  },
}

export type Translations = typeof translations.no

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('no')
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
