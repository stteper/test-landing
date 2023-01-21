import cn from 'classnames'
import React from 'react'

import styles from './LeftImageBlock.module.scss'

import { BlockWithImageProps } from '../interface'

export const LeftImageBlock: React.FC<BlockWithImageProps> = ({ image, title, children }) => {
  return (
    <div className={styles.leftImageBlock}>
      <div className={cn(['container', styles.blockWrapper])}>
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} className={styles.image} />
          </div>
        </div>

        <div className={styles.rightColumn}>
          <p className={styles.title}>{title}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
