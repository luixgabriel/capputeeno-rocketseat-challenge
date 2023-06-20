import { styled } from 'styled-components'

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  background-color: red;
`
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export function Header() {
  return (
    <TagHeader>
      <Logo>Caputeeno</Logo>
      <div>carrinho</div>
    </TagHeader>
  )
}
