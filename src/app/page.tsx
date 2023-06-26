'use client'
import { styled } from 'styled-components'
import { FilterBar } from './components/filter-bar'
import { ProductsList } from './components/products-list'
import { DefaultPageLayout } from './components/default-page-layout'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background: var(--bg-primary);
`

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList></ProductsList>
      </PageWrapper>
    </DefaultPageLayout>
  )
}
