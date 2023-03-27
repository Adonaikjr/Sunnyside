import { ContainerCardClients } from './styled'

interface typePropsCardClients {
  text: string
  name: string
  image: any
  job: string
}

export function CardClients({ text, name, image, job }: typePropsCardClients) {
  return (
    <ContainerCardClients>
      <img src={image} alt={name} />
      <p>{text}</p>
      <div>
        <strong>{name}</strong>
        <span>{job}</span>
      </div>
    </ContainerCardClients>
  )
}
