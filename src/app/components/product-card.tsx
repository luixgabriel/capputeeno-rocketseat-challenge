import { styled } from 'styled-components'

interface ProductCardProps {
  image: string
  title: string
  price: number
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  width: 256px;
  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    color: var(--text-dark-2);
    font-size: 16px;
    font-family: inherit;
    font-weight: 300;
    line-height: 150%;
  }

  p {
    color: var(--shapes-dark);
    font-size: 14px;
    font-family: inherit;
    font-weight: 600;
    line-height: 150%;
  }
  //SELECIONA  APRIMEIRA DIV
  > div {
    width: 228px;
    height: 1px;
    left: 12px;
    top: 340px;
    margin: 8px 0;
    background: var(--shapes);
  }
`

export function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div />
      <p>{price}</p>
    </Card>
  )
}
