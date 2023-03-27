import { ContainerFooter } from './styled'
import Facebook from '../../images/icon-facebook.svg'
import Instagram from '../../images/icon-instagram.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
export function Footer() {
  return (
    <ContainerFooter>
      <h1>sunnyside</h1>
      <nav>
        <a href="##">About</a>
        <a href="##">Services</a>
        <a href="##">Projects</a>
      </nav>
      <div>
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="Twitter" />
        <img src={Pinterest} alt="Pinterest" />
      </div>
    </ContainerFooter>
  )
}
