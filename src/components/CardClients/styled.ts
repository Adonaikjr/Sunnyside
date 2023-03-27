import styled from 'styled-components'

export const ContainerCardClients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem 0.5rem;
  img {
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
  }
  p {
    height: 100px;
    text-align: center;
    color: ${(props) => props.theme.base_text};
    font-family: ${(props) => props.theme.font_barlow};
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
  }
`
