import { ProductsFetchResponse } from '@/types/products-response'
import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useFilter } from './useFilter'
import { mountQuery } from '@/utils/graphql-filters'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = async (query: string): AxiosPromise<ProductsFetchResponse> => {
  const data = await axios.post(API_URL, {
    query,
  })
  return data
}

export function useProducts() {
  const { type, priority } = useFilter()
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
  })

  return {
    data: data?.data?.data?.allProducts,
  }
}
