import React from 'react'

import { Link } from 'react-router-dom'

import { LogoProps } from './interface'
import styles from './Logo.module.scss'

export const Logo: React.FC<LogoProps> = ({ src, title, ...props }: LogoProps) => {
  return (
    <Link className={styles.logo} title={title} {...props}>
      <img src={src} alt={title} className={styles.logoImage} />
    </Link>
  )
}
