import { styled } from 'styled-components'
import { ArrowIcon } from '../icons/arrow-icon'
import { useState } from 'react'
import { useFilter } from '@/hooks/useFilter'
import { PriorityTypes } from '@/types/priority-types'

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`
const PriorityFilter = styled.ul`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  width: 176px;
  top: 100%;
  right: 8px;
  z-index: 999;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  //LI QUE TIVER UM LI POR CIMA VAI RECEBER ESSA MARGIN
  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }
  return (
    <FilterContainer>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
