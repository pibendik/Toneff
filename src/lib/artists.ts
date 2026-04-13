export type ArtistTier = 'headliner' | 'main' | 'support'

export type Artist = {
  id: string
  name: string
  image: string
  tier: ArtistTier
}

export const artists: Artist[] = [
  { id: 'flammer', name: 'Flammer Dance Band', image: '/imgs/flammer.jpg', tier: 'headliner' },
  { id: 'tuva', name: 'Tuva og Valkyrien All Star', image: '/imgs/tuva.jpeg', tier: 'headliner' },
  { id: 'tigerstate', name: 'Tigerstate', image: '/imgs/tigerstate.jpg', tier: 'main' },
  { id: 'todd-terje', name: 'Todd Terje', image: '/imgs/toddterje.jpeg', tier: 'main' },
  { id: 'three-sous', name: 'Three Sous', image: '/imgs/three_sous.jpeg', tier: 'support' },
  { id: 'pumpegris', name: 'Pumpegris', image: '/imgs/pumpegris.jpeg', tier: 'support' },
  { id: 'why-kai', name: 'Why Kai', image: '/imgs/why-kai.jpg', tier: 'support' },
]
