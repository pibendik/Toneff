'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '@/lib/theme'
import { LangProvider } from '@/lib/i18n'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <LangProvider>{children}</LangProvider>
    </ThemeProvider>
  )
}
