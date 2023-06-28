'use client'
import { styled } from 'styled-components'
import { DefaultPageLayout } from '../components/default-page-layout'
import { BackButton } from '../components/back-button'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductsInCart } from '@/types/products'
import { formatPrice } from '@/utils/format-price'
import { CartItem } from '../components/cart/cart-item'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 352px;
  padding: 16px 24px;

  background: white;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`

const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${(props) => (props.isBold ? '600' : '400')};
  font-size: 16px;
  line-height: 150%;

  margin-bottom: 12px;
`

const ShopBtn = styled.button`
  color: white;
  border-radius: 4px;
  background: var(--success-color);
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;
`

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductsInCart[]>(
    'cart-items',
    [],
  )
  const calculateTotal = (arr: ProductsInCart[]) => {
    return arr.reduce((sum, item) => {
      return (sum += item.price_in_cents * item.quantity)
    }, 0)
  }

  const cartTotal = calculateTotal(value)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item
      return { ...item, quantity }
    })

    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <BackButton navigate="/" />
        <CartListContainer>
          <h3>Seu carrinho</h3>
          <p>Total {value.length} produtos</p>
          <span>{formatPrice(cartTotal)}</span>
          <CartList>
            {value.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
      </Container>
    </DefaultPageLayout>
  )
}
