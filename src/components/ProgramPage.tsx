'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { useLang } from '@/lib/i18n'
import { artists, ArtistTier } from '@/lib/artists'

export default function ProgramPage() {
  const { t } = useLang()

  const headliners = artists.filter((a) => a.tier === 'headliner')
  const mains = artists.filter((a) => a.tier === 'main')
  const supports = artists.filter((a) => a.tier === 'support')

  return (
    <Wrapper>
      <PosterSection>
        <PosterDate>{t.program.date}</PosterDate>

        <PosterBlock>
          {headliners.map((a) => (
            <ArtistRow key={a.id} $tier={a.tier}>
              <ArtistThumb>
                <Image src={a.image} alt={a.name} fill style={{ objectFit: 'cover' }} sizes="80px" />
              </ArtistThumb>
              <ArtistName $tier={a.tier}>{a.name}</ArtistName>
            </ArtistRow>
          ))}
        </PosterBlock>

        <Divider />

        <PosterBlock>
          {mains.map((a) => (
            <ArtistRow key={a.id} $tier={a.tier}>
              <ArtistThumb $small>
                <Image src={a.image} alt={a.name} fill style={{ objectFit: 'cover' }} sizes="56px" />
              </ArtistThumb>
              <ArtistName $tier={a.tier}>{a.name}</ArtistName>
            </ArtistRow>
          ))}
        </PosterBlock>

        <Divider />

        <SupportRow>
          {supports.map((a, i) => (
            <span key={a.id}>
              <SupportName>{a.name}</SupportName>
              {i < supports.length - 1 && <SupportDot>·</SupportDot>}
            </span>
          ))}
        </SupportRow>
      </PosterSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100dvh - 64px);
  background: ${({ theme }) => theme.colors.offWhite};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
`

const PosterSection = styled.section`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`

const PosterDate = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
`

const PosterBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const ArtistRow = styled.div<{ $tier: ArtistTier }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`

const ArtistThumb = styled.div<{ $small?: boolean }>`
  position: relative;
  width: ${({ $small }) => ($small ? '56px' : '80px')};
  height: ${({ $small }) => ($small ? '56px' : '80px')};
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.lightGray};
`

const ArtistName = styled.h2<{ $tier: ArtistTier }>`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ $tier }) =>
    $tier === 'headliner' ? 'clamp(36px, 6vw, 80px)' : 'clamp(28px, 4vw, 56px)'};
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const SupportRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const SupportName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(18px, 2.5vw, 28px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`

const SupportDot = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.yellow};
  margin: 0 4px;
`
