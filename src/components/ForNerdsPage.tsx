'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import { useLang, Lang } from '@/lib/i18n'
import { todos } from '@/lib/todos'

const DISCORD_URL = 'https://discord.gg/placeholder'

export default function ForNerdsPage() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState<'all' | 'done' | 'pending'>('all')

  const categories = Array.from(new Set(todos.map((todo) => todo.category[lang as Lang])))

  const filtered = (cat: string) =>
    todos
      .filter((todo) => todo.category[lang as Lang] === cat)
      .filter((todo) => {
        if (filter === 'done') return todo.done
        if (filter === 'pending') return !todo.done
        return true
      })

  const doneCount = todos.filter((t) => t.done).length
  const total = todos.length

  return (
    <Wrapper>
      <Header>
        <Heading>{t.forNerds.heading}</Heading>
        <Subtitle>{t.forNerds.subtitle}</Subtitle>
        <ProgressBar>
          <ProgressFill style={{ width: `${(doneCount / total) * 100}%` }} />
        </ProgressBar>
        <ProgressLabel>
          {doneCount}/{total} {t.forNerds.done.toLowerCase()}
        </ProgressLabel>
      </Header>

      <FilterRow>
        <FilterBtn $active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterBtn>
        <FilterBtn $active={filter === 'done'} onClick={() => setFilter('done')}>{t.forNerds.done}</FilterBtn>
        <FilterBtn $active={filter === 'pending'} onClick={() => setFilter('pending')}>{t.forNerds.pending}</FilterBtn>
      </FilterRow>

      <CategoriesGrid>
        {categories.map((cat) => {
          const items = filtered(cat)
          if (items.length === 0) return null
          return (
            <Category key={cat}>
              <CategoryHeading>{cat}</CategoryHeading>
              <ItemList>
                {items.map((todo) => (
                  <Item key={todo.id} $done={todo.done}>
                    <Checkbox $done={todo.done}>{todo.done ? '✓' : ''}</Checkbox>
                    <ItemText $done={todo.done}>{todo.task[lang as Lang]}</ItemText>
                    {todo.volunteer && !todo.done && (
                      <VolunteerBadge>volunteer</VolunteerBadge>
                    )}
                  </Item>
                ))}
              </ItemList>
            </Category>
          )
        })}
      </CategoriesGrid>

      <DiscordSection>
        <DiscordLink href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
          {t.forNerds.discordCta} ↗
        </DiscordLink>
      </DiscordSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(48px, 8vw, 96px);
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  line-height: 1.6;
`

const ProgressBar = styled.div`
  width: 100%;
  max-width: 300px;
  height: 6px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 3px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 3px;
  transition: width 0.4s ease;
`

const ProgressLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
`

const FilterRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`

const FilterBtn = styled.button<{ $active: boolean }>`
  background: ${({ theme, $active }) => ($active ? theme.colors.yellow : theme.colors.white)};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.yellow : theme.colors.border)};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: ${({ theme, $active }) => ($active ? theme.colors.yellowHover : theme.colors.yellowLight)};
  }
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const CategoryHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`

const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Item = styled.li<{ $done: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  opacity: ${({ $done }) => ($done ? 0.5 : 1)};
`

const Checkbox = styled.span<{ $done: boolean }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 1.5px solid ${({ theme, $done }) => ($done ? theme.colors.yellow : theme.colors.lightGray)};
  border-radius: 2px;
  background: ${({ theme, $done }) => ($done ? theme.colors.yellow : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`

const ItemText = styled.span<{ $done: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
`

const VolunteerBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
`

const DiscordSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const DiscordLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
  padding-bottom: 2px;
  transition: color 0.15s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`
