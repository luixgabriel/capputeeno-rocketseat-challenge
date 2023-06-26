import { styled } from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from './primary-input'
import { CartControl } from './cart-control'
import { useFilter } from '@/hooks/useFilter'
const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  //QUANDO ELE CHEGAR E FOR MAIOR QUE 968PX ELE APLICA ESSA REGRA ABAIXO
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`
const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  //QUANDO ELE CHEGAR E FOR MAIOR QUE 768PX ELE APLICA ESSA REGRA ABAIXO
  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 24px;
  }

  //QUANDO ELE CHEGAR E FOR MAIOR QUE 968PX ELE APLICA ESSA REGRA ABAIXO
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`

export function Header() {
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Caputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          placeholder="Procurando por algo específico?"
          value={search}
          handleChange={setSearch}
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}
