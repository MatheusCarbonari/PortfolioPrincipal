import { useState, useEffect, useRef } from 'react';

import styles from './Slider.module.css'
import { motion } from 'framer-motion';

import imagem1 from '../../../assets/Slides/Captura_books.PNG'
import imagem2 from '../../../assets/Slides/Captura_LandingPage.PNG'
import imagem3 from '../../../assets/Slides/Captura_Museu.PNG'
import imagem4 from '../../../assets/Slides/Captura_Space.PNG'

const imagens = [imagem1, imagem2, imagem3, imagem4]

const Slider = () => {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  const parent = {
    variantA: { scale: 1},
    variantB: { scale: 1.2},
  }

  return(
    <section className={styles.slider__container}>
      <motion.div
        ref={carousel}
        className={styles.slider__carrousel} 
        whileTap={{cursor: 'grabbing'}}
        >

        <motion.div 
          className={styles.inner_carrousel} 
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          initial={{x:100}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
          
        >

          {imagens.map(item => (
            <motion.div 
              className={styles.inner_carrousel__image} 
              key={item}
              variants={parent}
              initial="variantA"
              whileHover="variantB"
            >
              <img src={item} alt='Imagem'/>
            </motion.div>
          ))}

        </motion.div>

      </motion.div>
    </section>
  )
}

export default Slider;