import { ContainerHeader } from './styled'
import { AiOutlineMenu } from 'react-icons/all'
import ArrowIcon from '../../images/icon-arrow-down.svg'
interface typePropsHeader {
  title: string
  logo: any
}

export function Header({ title, logo }: typePropsHeader) {
  return (
    <ContainerHeader>
      <nav>
        <h2>{logo}</h2>
        <AiOutlineMenu size={24} />
      </nav>
      <div>
        <h1>{title}</h1>
        <img src={ArrowIcon} alt="" />
      </div>
    </ContainerHeader>
  )
}
