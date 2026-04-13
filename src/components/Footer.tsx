'use client'

import styled from 'styled-components'
import { useLang } from '@/lib/i18n'

const DISCORD_URL = 'https://discord.gg/placeholder'

export default function Footer() {
  const { t } = useLang()
  return (
    <FooterEl>
      <Inner>
        <Rights>{t.footer.rights}</Rights>
        <DiscordLink href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
          {t.footer.discord} ↗
        </DiscordLink>
      </Inner>
    </FooterEl>
  )
}

const FooterEl = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg}`};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    text-align: center;
  }
`

const Rights = styled.span``

const DiscordLink = styled.a`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`
