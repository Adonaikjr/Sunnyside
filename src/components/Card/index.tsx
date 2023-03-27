import { ContainerCard } from './styled'

interface types_props {
  title: string
  text: string
  link?: string
}

export function Card({ title, text, link }: types_props) {
  return (
    <ContainerCard>
      <h1>{title}</h1>
      <p>{text}</p>
      <a href="##">{link}</a>
    </ContainerCard>
  )
}
