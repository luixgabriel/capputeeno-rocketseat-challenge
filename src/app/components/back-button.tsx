import { styled } from 'styled-components'
import { BackIcon } from '../icons/back-icon'
import { useRouter } from 'next/navigation'

interface BtnProps {
  navigate: string
}

const Backbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
  background: transparent;
  border: none;
  cursor: pointer;
`

export function BackButton({ navigate }: BtnProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push(navigate)
  }
  return (
    <Backbutton onClick={handleNavigate}>
      <BackIcon />
      Voltar
    </Backbutton>
  )
}
