'use client'
import { useProducts } from '@/hooks/useProducts'

export function ProductsList() {
  const { data } = useProducts()
  console.log(data)
  return (
    <div>
      <h1>heelo world</h1>
    </div>
  )
}
