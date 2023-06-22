'use client'
import { QueryClientProvider, QueryClient } from 'react-query'
import { FilterBar } from './components/filter-bar'
import { ProductsList } from './components/products-list'
import styles from './page.module.css'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList></ProductsList>
      </main>
    </QueryClientProvider>
  )
}
