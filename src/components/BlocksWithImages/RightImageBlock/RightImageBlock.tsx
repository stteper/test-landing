import cn from 'classnames'
import React from 'react'

import styles from './RightImageBlock.module.scss'

import { BlockWithImageProps } from '../interface'

export const RightImageBlock: React.FC<BlockWithImageProps> = ({ image, title, children }) => {
  return (
    <div className={styles.rightImageBlock}>
      <div className={cn(['container', styles.blockWrapper])}>
        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} className={styles.image} />
          </div>
        </div>

        <div className={styles.leftColumn}>
          <p className={styles.title}>{title}</p>
          {children}
        </div>
      </div>
    </div>
  )
}
