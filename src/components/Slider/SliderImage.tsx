import React from 'react'

import { ImageData } from './interface'
import styles from './Slider.module.scss'

export const SliderImage: React.FC<ImageData> = (image) => {
  return (
    <div className={styles.sliderImageWrapper}>
      <img {...image} alt={image.alt} className={styles.sliderImage} />
    </div>
  )
}
