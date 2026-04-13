'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useLang } from '@/lib/i18n'
import LogoPlaceholder from './LogoPlaceholder'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  return (
    <Nav>
      <Inner>
        <LogoLink href="/" onClick={() => setOpen(false)}>
          <LogoPlaceholder />
        </LogoLink>

        <DesktopLinks>
          <NavLink href="/">{t.nav.home}</NavLink>
          <NavLink href="/program">{t.nav.program}</NavLink>
          <NavLink href="/for-nerds">{t.nav.forNerds}</NavLink>
        </DesktopLinks>

        <RightGroup>
          <LangToggle>
            <LangBtn $active={lang === 'no'} onClick={() => setLang('no')}>NO</LangBtn>
            <LangSep>|</LangSep>
            <LangBtn $active={lang === 'en'} onClick={() => setLang('en')}>EN</LangBtn>
          </LangToggle>
          <Hamburger onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? '✕' : '☰'}
          </Hamburger>
        </RightGroup>
      </Inner>

      {open && (
        <MobileMenu>
          <MobileNavLink href="/" onClick={() => setOpen(false)}>{t.nav.home}</MobileNavLink>
          <MobileNavLink href="/program" onClick={() => setOpen(false)}>{t.nav.program}</MobileNavLink>
          <MobileNavLink href="/for-nerds" onClick={() => setOpen(false)}>{t.nav.forNerds}</MobileNavLink>
        </MobileMenu>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  height: 64px;
`

const LogoLink = styled(Link)`
  text-decoration: none;
  flex-shrink: 0;
`

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const LangToggle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`

const LangBtn = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  letter-spacing: 0.06em;
  color: ${({ theme, $active }) => ($active ? theme.colors.black : theme.colors.gray)};
  padding: 2px 0;
  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

const LangSep = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 12px;
`

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
  padding: 4px;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`

const MobileNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`
