import React, { useCallback, useEffect, useRef } from 'react'

import { SliderProps } from './interface'
import styles from './Slider.module.scss'

import { SliderImage } from './SliderImage'

const isMobileSlider = (): Boolean => window.innerWidth < 768
export const Slider: React.FC<SliderProps> = ({ images }) => {
  const scrollHandler = useCallback(() => {
    if (isMobileSlider()) {
      return
    }

    const top = document.documentElement.scrollTop

    if (!slides.current) {
      return
    }

    const lim = Math.round(
      slides.current.offsetHeight -
        (slides.current.scrollLeft - window.innerHeight - slides.current.getBoundingClientRect().height) / 2,
    )
    const width = Math.round(slides.current.scrollWidth - window.innerWidth)
    const delta = Math.min(Math.max(top - lim, 0), width)

    slides.current.style.transform = `translateX(${-delta}px)`
    document.body.style.paddingBottom = `${width - delta}px`
    document.body.style.paddingTop = `${delta}px`
  }, [])

  const slides = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    document.body.style.paddingBottom = isMobileSlider()
      ? '0'
      : `${slides.current ? slides.current.scrollWidth - slides.current.clientHeight : 0}px`

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  })

  return (
    <div className={styles.slider}>
      <div className={styles.slidesContainer} ref={slides}>
        {images && images.map((image, index) => <SliderImage key={index} {...image} />)}
      </div>
    </div>
  )
}
