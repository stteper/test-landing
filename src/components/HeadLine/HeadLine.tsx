import React from 'react'

import styles from './HeadLine.module.scss'
import { HeadLineProps } from './interface'

export const HeadLine: React.FC<HeadLineProps> = ({ level, text }: HeadLineProps) => {
  return <>{level === 1 ? <h1 className={styles.headLine}>{text}</h1> : <h2 className={styles.headLine}>{text}</h2>}</>
}
