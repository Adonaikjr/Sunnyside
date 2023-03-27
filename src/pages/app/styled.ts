import styled from 'styled-components'
import design from '../../images/mobile/image-graphic-design.jpg'
import photography from '../../images/mobile/image-photography.jpg' // laranja
import designDesktop from '../../images/desktop/image-graphic-design.jpg'
export const ContainerApp = styled.main`
  > img {
    width: 100%;
  }
  > h2 {
    padding: 2rem;
    text-align: center;
    font-family: ${(props) => props.theme.font_fraunces};
    font-size: 18px;
  }
`

export const BoxA = styled.div`
  img {
    width: 100%;
  }
  @media (min-width: 851px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    div {
      width: 50%;
    }
    h1 {
      padding: 0px;
      width: 20rem;
      text-align: left;
    }
    p {
      width: 20rem;
      text-align: left;
    }
    a {
      text-align: left;
      width: 20rem;
    }

    img {
      width: 50%;
    }
  }
`

export const BoxB = styled(BoxA)`
  flex-direction: row;
`
export const BoxC = styled(BoxA)`
  img {
    width: auto;
  }
  flex-direction: row;
  flex-wrap: nowrap;
  @media (max-width: 1041px) {
    flex-wrap: wrap;
  }
`
export const ContainerSection = styled.section`
  background-image: url(${design});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 44rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 851px) {
    background-image: url(${designDesktop});
    display: flex;
    width: 50%;
  }
`
export const ContainerSectionNew = styled(ContainerSection)`
  background-image: url(${photography});
`

export const ContainerArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    margin: 0px;
    padding: 0px;
    margin-bottom: -15px;
  }
  img {
    height: 100%;
    width: 50%;
    border: none;
  }
  @media (min-width: 739px) {
    flex-direction: row;
    width: 100%;
    div {
      width: 100%;
    }
  }
`
