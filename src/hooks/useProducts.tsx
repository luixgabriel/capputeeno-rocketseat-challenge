import { ProductsFetchResponse } from '@/types/products-response'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useFilter } from './useFilter'
import { mountQuery } from '@/utils/graphql-filters'
import { useDeferredValue } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = async (query: string): AxiosPromise<ProductsFetchResponse> => {
  const data = await axios.post(API_URL, {
    query,
  })
  return data
}

export function useProducts() {
  const { type, priority, search } = useFilter()
  // ESSE HOOK PERMITE QUE O ESTADO SÓ ATUALIZE QUANDO ELE SER TERMINADO
  const searchDeffered = useDeferredValue(search)
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
    staleTime: 1000 * 60 * 1,
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter((products) =>
    products.name.toLowerCase().includes(searchDeffered.toLowerCase()),
  )

  return {
    data: filteredProducts,
  }
}
