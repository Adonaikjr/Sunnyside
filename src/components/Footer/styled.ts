import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  border: solid;
  background-color: ${(props) => props.theme.background_footer};
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    color: ${(props) => props.theme.text_footer};
    font-family: ${(props) => props.theme.font_fraunces};
  }
  div {
    display: flex;
    gap: 1rem;
  }
  nav {
    display: flex;
    gap: 2rem;
    a {
      font-family: ${(props) => props.theme.font_barlow};
      color: ${(props) => props.theme.text_footer};
    }
  }
`
