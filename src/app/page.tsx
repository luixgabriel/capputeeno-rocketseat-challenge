'use client'
import { styled } from 'styled-components'
import { FilterBar } from './components/filter-bar'
import { ProductsList } from './components/products-list'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background: var(--bg-primary);

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 30px 160px;
  }
`

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList></ProductsList>
    </PageWrapper>
  )
}
