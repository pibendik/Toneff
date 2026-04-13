export const theme = {
  colors: {
    yellow: '#F5C800',
    yellowHover: '#E0B800',
    yellowLight: '#FFFBE6',
    black: '#0D0D0D',
    white: '#FFFFFF',
    offWhite: '#FAFAF8',
    gray: '#6B6B6B',
    lightGray: '#E8E8E5',
    border: '#E0E0DC',
  },
  fonts: {
    display: "var(--font-bebas), 'Impact', sans-serif",
    body: "var(--font-inter), system-ui, sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    xxl: '96px',
  },
  breakpoints: {
    mobile: '768px',
  },
}

export type Theme = typeof theme
