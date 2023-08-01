import IntroductionOfProjects from '../../components/ComponentsOfProjects/Introduction';
import styles from './Projects.module.css'
import { SwiperSlide } from 'swiper/react';
import Slider from '../../components/ComponentsOfProjects/Slider';

const Projects = () => {
    
    const settings ={
        spaceBetween: 50,
        slidesPerView: 3,
    }

    return (
        <main className={styles.mainProjects__container}>
            <IntroductionOfProjects/>
            <Slider settings={settings}>
                <SwiperSlide>
                    <h1>teste1</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>teste2</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <h1>teste3</h1>
                </SwiperSlide>
            </Slider>
        </main>
    )
}

export default Projects;