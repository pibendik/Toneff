import type { Metadata } from 'next'
import ProgramPage from '@/components/ProgramPage'

export const metadata: Metadata = {
  title: 'Program | Toneff-Festivalen',
}

export default function Program() {
  return <ProgramPage />
}
