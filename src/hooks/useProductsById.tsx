import { ProductFetchResponse } from '@/types/products'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, {
    query: `
  query {
    Product(id: "${productId}"){
      name
      description
      category
      price_in_cents
      image_url
    }
  }
  `,
  })
}

export function useProductsById(id: string) {
  // Com o useQuery minha requisição dispara assim que eu monto o componente
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    // Com a opção enabled a minha requisição só diaspara qunado ela for true
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  })

  return {
    data: data?.data?.data?.Product,
  }
}
