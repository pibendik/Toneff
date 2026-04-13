'use client'

import styled from 'styled-components'
import { useLang } from '@/lib/i18n'

const TICKETMASTER_URL = 'https://www.ticketmaster.no'

export default function HomePage() {
  const { t } = useLang()

  return (
    <Wrapper>
      <Hero>
        <FestivalName>Toneff-Festivalen</FestivalName>
        <DateLine>{t.home.date}</DateLine>
        <Location>{t.home.location}</Location>
        <TicketButton href={TICKETMASTER_URL} target="_blank" rel="noopener noreferrer">
          {t.home.ticketsCta}
        </TicketButton>
        <TicketsNote>{t.home.ticketsNote}</TicketsNote>
        <NoPhonesNote>{t.home.noPhonesLabel} 📵</NoPhonesNote>
      </Hero>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100dvh - 64px);
  background: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Hero = styled.section`
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const FestivalName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(52px, 10vw, 140px);
  line-height: 0.9;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`

const DateLine = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(22px, 3.5vw, 42px);
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const Location = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
`

const TicketButton = styled.a`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: 18px 48px;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.15s, transform 0.1s;

  &:hover {
    background: ${({ theme }) => theme.colors.yellowHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

const TicketsNote = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 0.04em;
`

const NoPhonesNote = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
`
