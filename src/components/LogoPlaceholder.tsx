'use client'

import styled from 'styled-components'

const Placeholder = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 36px;
  background: ${({ theme }) => theme.colors.yellow};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 18px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
`

export default function LogoPlaceholder() {
  return <Placeholder aria-label="Toneff-Festivalen logo placeholder">TONEFF</Placeholder>
}
