import { styled } from 'styled-components'
import { ArrowIcon } from '../icons/arrow-icon'

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export function FilterByPriority() {
  return (
    <FilterContainer>
      <p>Organizar por</p>
      <ArrowIcon />
    </FilterContainer>
  )
}
