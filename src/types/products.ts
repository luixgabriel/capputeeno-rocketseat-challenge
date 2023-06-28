export interface Products {
  id: string
  name: string
  price_in_cents: number
  image_url: string
  description?: string
  category?: string
}

export interface ProductsInCart extends Products {
  quantity: number
}

export interface ProductFetchResponse {
  data: {
    Product: Products
  }
}
