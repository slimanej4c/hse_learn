
import Accueil_part1 from "./accueil/Accueil_part1"
import Accueil_part2 from "./accueil/Accueil_part2"
import Section1 from "./home/section1"
import Section2 from "./home/section2"
import Section3 from "./home/section3"
import Section4 from "./home/section4"
import Section5 from "./home/section5"
import Accueil_part4 from "./accueil/Accueil_part4"
import Slider_avis from "./home/Slider_avis"
import { formation_text, formation_title, formation_image ,formation_prof} from './home/formation'
import { images_presentation, titles_presentation, aprops_presentation, button_presentation } from "./home/presentation"
export default function Home() {
  //
  return (
    <div className='home-all-section'>
    <section className='section1'>
   
    <Section1 />
    {/**  <div   className="presentation-img-fixed"
        style={{ backgroundImage: `url(${images_presentation[0].image_fixed})` }}>
          <div className='presentation-img-fixed-div'>

          </div>

          </div>

           <div
        className="presentation-sous-svg"
        style={{ backgroundImage: `url(${images_presentation[0].svg})` }}

        key={0}
      />  */}
        
    


  
  </section>
  <section className='section2' >
  <Section2 />
  
 
   </section>
   <section className='section3' >
 
   <Section3/>

   </section>
   <section className='section4' >
 
   <Section4/>

   </section>
   <section className='section5' >
 
   <Section5/>

   </section>
  </div>

  
  )
}
