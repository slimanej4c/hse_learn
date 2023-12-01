
"use client"
import React , { useState ,useEffect} from 'react'
import { connect } from 'react-redux'
import { temoignage_text, } from "./temoignage"
import { motion, useAnimation, useMediaQuery ,AnimatePresence} from "framer-motion";
export const Slider_avis = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nombre_sliders, setnumber_sliders] = useState(1);
    const [wait_finish_anime, setwait_finish_anime] = useState(true);
    const [width_slider, setwidth_slide] = useState('33%');
    const [direction_anime_init, setdirection_anime_init] = useState('100%');
    const [direction_anime_exit, setdirection_anime_exit] = useState('-100%');
    const [margin_left, setmargin_left] = useState(['0%','33%','66%'])//change ici width si 2 metre le 50
    const [isMobile, setIsMobile] = useState(false);
    const [auto_change, setauto_change] = useState(true);
   
    const array_sliders = [
        {id:1, slider: 'slider1' },
        { id:2,slider: 'slider2' },
        { id:3,slider: 'slider3' },
        { id:4,slider: 'slider4' },
        { id:5,slider: 'slider5' },
    ];
    useEffect(() => {
        setIsMobile(window.innerWidth <= 750);
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 750);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
      useEffect(() => {
        if (isMobile) {
            setwidth_slide('100%')
            setnumber_sliders(1)
        } else {
            setwidth_slide('33%')
            setnumber_sliders(3)
        }
      }, [isMobile]);
const rotateArray2 = (direction) => {
  
        if (wait_finish_anime){
            if (direction === 'forward') {
                setdirection_anime_exit('0%')
             
                setCurrentIndex((prevIndex) => (prevIndex + 1) % array_sliders.length);
                
            } else if (direction === 'backward') {
                setdirection_anime_exit('0%')
                setCurrentIndex((prevIndex) =>
                   prevIndex === 0 ? array_sliders.length - 1 : prevIndex - 1
                );
            }
            {wait_finish_anime &&   setwait_finish_anime(false)}
    
        }
       
    };
    const auto_rotate = (direction) => {
        if (wait_finish_anime){
                
             setdirection_anime_exit('-100%')
                
             
                setCurrentIndex((prevIndex) => (prevIndex + 1) % array_sliders.length);
                
           
            }
            {wait_finish_anime &&   setwait_finish_anime(false)}
    
       
       
    };
    //pour automatique chaque 4 escond
    useEffect(() => {
        
            const interval = setInterval(() => {
                if(auto_change){
                
                        auto_rotate ('forward')
                    }
                   

              
               
              
              
             
            }, 4000);
            return () => clearInterval(interval);

        
       
      }, [auto_change]);
    
useEffect(() => {
    if (direction_anime_exit=='-100%'){
        rotateArray2('forward')
    }
    else{
        rotateArray2('backward')
    }
  
    }, [direction_anime_exit]);
const rotateArray = (direction) => {
    setauto_change(false)
    if (wait_finish_anime){
        if (direction === 'forward') {
           
            setdirection_anime_exit('-100%')
            setdirection_anime_init('100%')
           
            
        } else if (direction === 'backward') {
            setdirection_anime_exit('100%')
            setdirection_anime_init('-100%')
           
        }
    

    }
   
};

const startIndex = currentIndex % array_sliders.length;
const slidersToShow = array_sliders
    .slice(startIndex, startIndex + nombre_sliders)
    .concat(array_sliders.slice(0, Math.max(0, nombre_sliders - (array_sliders.length - startIndex))));
    const image_figuretVariantsLeft = {
        initial: {
          opacity: 1,
          x:direction_anime_init,
        },
        animate: {
          position:'absolute',
          opacity: 1,
          x: '0%',
          transition: {
            duration: 1,
          },
        },
      
        exit: {
          opacity: 1,
          position:'absolute',
          x:direction_anime_exit,
          transition: {
            duration:1,
          },
        },
      };
      
      
const image_figuretVariantsRight = {
        initial: {
          opacity: 1,
          x:"-100%",
        },
        animate: {
          opacity: 1,
          x: '0%',
          position:'absolute',
          transition: {
            duration: 2,
          },
        },
        exit: {
          position:'absolute',
          x:"100%",
          backgroundColor: 'red',
          transition: {
            duration: 2,
          },
        },
        
      };

return (
    <div className="slider_container">
        <div className="content">
            <div className="content-top">
                <div className="sliders">
                    {slidersToShow.map((item, index) => {
                        
                        return (
                            <AnimatePresence >
                            <motion.div  className="slider" style={{ width: width_slider, order: index ,left:margin_left[index]}}
                            variants={ image_figuretVariantsLeft }
                            initial="initial"
                            animate="animate"
                            exit={"exit"}
                           
                            key={item.slider+currentIndex}
                            onAnimationComplete={definition => {
                                console.log('Completed animating', definition)
                                {!wait_finish_anime &&   setwait_finish_anime(true)}
                              
                              }}
                            >
                                {item.slider}
                            </motion.div>
                            </AnimatePresence>
                        );
                    })}
                </div>
            </div>
            <div className="content-botom">
                <button onClick={() => rotateArray('backward')}>Précédent</button>
                <button onClick={() => rotateArray('forward')}>Suivant</button>
            </div>
        </div>
    </div>
);
// ...

}

const mapStateToProps = (state) => ({


})

const mapDispatchToProps = dispatch => {
    return {



    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Slider_avis)