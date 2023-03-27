import styled from 'styled-components'
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.8rem;
  padding: 2.5rem 0.5rem;
  h1 {
    padding: 1px 1.5rem;
    font-family: ${(props) => props.theme.font_fraunces};
    color: ${(props) => props.theme.base_subtitle};
    text-align: center;
    font-weight: 700;
  }
  p {
    color: ${(props) => props.theme.base_text};
    font-family: ${(props) => props.theme.font_barlow};
  }
`
