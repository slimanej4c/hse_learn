import Image from 'next/image'
import Accueil_part1 from "./accueil/Accueil_part1"
import Accueil_part2 from "./accueil/Accueil_part2"
import Accueil_part4 from "./accueil/Accueil_part4"
import { formation_text, formation_title, formation_image ,formation_prof} from './accueil/formation'
import { images_presentation, titles_presentation, aprops_presentation, button_presentation } from "./accueil/presentation"
export default function Home() {
  return (
    <div className='home-all-section'>
    <section className='section1'>
    <section className='home-part1'>
    <Accueil_part1/>
          <div   className="presentation-img-fixed"
        style={{ backgroundImage: `url(${images_presentation[0].image_fixed})` }}>
          <div className='presentation-img-fixed-div'>

          </div>

          </div>


      <div
        className="presentation-sous-svg"
        style={{ backgroundImage: `url(${images_presentation[0].svg})` }}

        key={0}
      />

  </section>
  <Accueil_part2/>
  </section>
  <section className='section2' >
  <Accueil_part4/>

   </section>
  </div>
  
  )
}
