import React from 'react'

import { SliderProps } from './interface'
import styles from './Slider.module.scss'

import { SliderImage } from './SliderImage'

export const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slidesContainer}>
          {images && images.map((image, index) => <SliderImage key={index} {...image} />)}
        </div>
      </div>
    </div>
  )
}
