import type { Metadata } from 'next'
import ForNerdsPage from '@/components/ForNerdsPage'

export const metadata: Metadata = {
  title: 'For nerds | Toneff-Festivalen',
}

export default function ForNerds() {
  return <ForNerdsPage />
}
