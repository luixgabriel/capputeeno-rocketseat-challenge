import { ProductsInCart } from '@/types/products'
import { formatPrice } from '@/utils/format-price'
import { ChangeEvent } from 'react'
import { styled } from 'styled-components'

interface CartItemProps {
  product: ProductsInCart
  handleUpdateQuantity: (id: string, quantity: number) => void
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  border-radius: 8px;
  background: white;

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0 0 8px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    flex-direction: column;
    padding: 16px 24px;
    color: var(--text-dark-2);
    line-height: 150%;
    h4 {
      font-weight: 300;
      font-size: 20px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      span {
        font-weight: 600;
        font-size: 16px;
        color: var(--shapes-dark);
      }
    }
  }
`

const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
`

export function CartItem({ product, handleUpdateQuantity }: CartItemProps) {
  // Pra tipar e do change event eu mando um generico com o tipo da tag como parametro
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  return (
    <Item>
      <img src={product.image_url} alt="product" />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </Item>
  )
}
