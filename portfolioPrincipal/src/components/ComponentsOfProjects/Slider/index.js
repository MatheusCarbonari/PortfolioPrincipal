import { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css'
import { motion } from 'framer-motion';

const Slider = ({projects}) => {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
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
          dragConstraints={{ right: 500, left: -width - 100}}
        >

          {projects.map(item => (
            <motion.div 
              className={styles.inner_carrousel__image} 
              key={item.id}
              variants={parent}
              initial="variantA"
              whileHover="variantB"
            >
              <img src={item.imagem} alt={item.nome}/>
              <p>{item.descricao}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Slider;