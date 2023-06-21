'use client'
import { styled } from 'styled-components'
import { FilterByType } from './filter-by-type'

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`
export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType></FilterByType>
    </FilterContainer>
  )
}
