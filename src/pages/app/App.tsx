import { Card } from '../../components/Card'
import {
  ContainerApp,
  ContainerSection,
  ContainerSectionNew,
  ContainerArticle,
  BoxA,
  BoxB,
  BoxC,
} from './styled'
import imageTransform from '../../images/mobile/image-transform.jpg'
import standout from '../../images/mobile/image-stand-out.jpg'
import { CardClients } from '../../components/CardClients'
import Emily from '../../images/image-emily.jpg'
import Thomas from '../../images/image-thomas.jpg'
import Jennie from '../../images/image-jennie.jpg'
import imgMilk from '../../images/mobile/image-gallery-milkbottles.jpg'
import imgCubs from '../../images/mobile/image-gallery-sugar-cubes.jpg'
import imgCone from '../../images/mobile/image-gallery-cone.jpg'
import imgOrange from '../../images/mobile/image-gallery-orange.jpg'
export function App() {
  return (
    <ContainerApp>
      <BoxA>
        <img src={imageTransform} alt="eggs" />

        <Card
          title="Transform your brand"
          text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          link="Learn more"
        />
      </BoxA>

      <BoxB>
        <img src={standout} alt="stand" />

        <Card
          title="Stand out to the right audience"
          text="
        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          link="Learn more"
        />
      </BoxB>
      <BoxA>
        <ContainerSection>
          <span></span>
          <Card
            title="Graphic design"
            text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          />
        </ContainerSection>

        <ContainerSectionNew>
          <span></span>
          <Card
            title="Photography"
            text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          />
        </ContainerSectionNew>
      </BoxA>
      <h2>CLIENT TESTIMONIALS</h2>

      <BoxC>
        <CardClients
          image={Emily}
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
    Emily R.
    Marketing Director"
          name="Emily R."
          job="Marketing Director"
        />

        <CardClients
          image={Thomas}
          text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          job="Chief Operating Officer"
        />
        <CardClients
          image={Jennie}
          text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          job="Business Owner"
        />
      </BoxC>

      <ContainerArticle>
        <div>
          <img src={imgMilk} alt="imgMilk" />
          <img src={imgOrange} alt="imgOrange" />
        </div>
        <div>
          <img src={imgCone} alt="imgCone" />
          <img src={imgCubs} alt="imgCubs" />
        </div>
      </ContainerArticle>
    </ContainerApp>
  )
}
