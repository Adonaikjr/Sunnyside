import styled from 'styled-components'
import backgroudImage from '../../images/mobile/image-header.jpg'
import backgroundImageDesktop from '../../images/desktop/image-header.jpg'
export const ContainerHeader = styled.header`
  background-image: url(${backgroudImage});
  background-repeat: no-repeat;
  background-position: center;
  height: 26rem;
  background-size: cover;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0.5rem 0.5rem;
  }
  h1 {
    text-align: center;
    color: ${(props) => props.theme.base_title};
    font-family: ${(props) => props.theme.font_fraunces};
    font-weight: 700;
    font-style: bold;
    padding: 10px 10px;
  }
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 4.5rem;
    padding-top: 1.5rem;
  }
  img {
    height: 5.4rem;
  }
  @media (min-width: 375px) {
    background-image: url(${backgroundImageDesktop});
    height: 29rem;
  }
`
