import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';

import 'swiper/css'
import React, { ReactNode } from 'react';


const Slider = ({children, settings}) => {
    return (
        <Swiper {...settings}>
          {children}
        </Swiper>
    )
}

export default Slider;